import { useEffect, useMemo, useState } from 'react'
import AdminLayout from '../../components/AdminLayout'
import initialProducts from '../../data/products.json'

export default function AdminProducts() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Все')
  const [status, setStatus] = useState('Загрузка...')
  const [source, setSource] = useState('')

  const loadProducts = async () => {
    try {
      const res = await fetch('/api/admin/products')
      const data = await res.json()
      setProducts(data.products || initialProducts)
      setSource(data.source || 'unknown')
      setStatus(data.source === 'supabase' ? 'Подключено к Supabase' : 'Demo: Supabase ещё не подключен')
    } catch (e) {
      setProducts(initialProducts)
      setStatus('Ошибка загрузки, показан локальный каталог')
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const categories = ['Все', ...Array.from(new Set(products.map(p => p.category)))]

  const visible = useMemo(() => products.filter(p => {
    const q = query.toLowerCase()
    const okQuery = !q || `${p.name} ${p.category} ${p.model}`.toLowerCase().includes(q)
    const okCategory = category === 'Все' || p.category === category
    return okQuery && okCategory
  }), [products, query, category])

  const update = (slug, field, value) => {
    const next = products.map(p => p.slug === slug ? { ...p, [field]: value } : p)
    setProducts(next)
  }

  const saveProduct = async (product) => {
    setStatus(`Сохраняю ${product.name}...`)
    const res = await fetch('/api/admin/products', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
    const data = await res.json()
    if (!res.ok) {
      setStatus(data.error || 'Не удалось сохранить. Проверь Supabase env.')
      return
    }
    setStatus(`Сохранено: ${data.product.name}`)
  }

  const seedDatabase = async () => {
    setStatus('Загружаю стартовый каталог в Supabase...')
    const res = await fetch('/api/admin/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ products: initialProducts })
    })
    const data = await res.json()
    if (!res.ok) {
      setStatus(data.error || 'Не удалось загрузить каталог')
      return
    }
    setStatus(`Каталог загружен в Supabase: ${data.imported} товаров`)
    loadProducts()
  }

  return (
    <AdminLayout title="Товары">
      <section className="adminNote">
        <b>Статус базы:</b> {status}
        {source && <span> · источник: {source}</span>}
      </section>

      <section className="adminToolbar">
        <input placeholder="Поиск товара" value={query} onChange={e => setQuery(e.target.value)} />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
        <button className="btn small" onClick={seedDatabase}>Залить каталог в БД</button>
        <button className="adminGhost" onClick={loadProducts}>Обновить</button>
      </section>

      <section className="adminTable">
        <div className="adminTableHead">
          <span>Товар</span><span>Категория</span><span>Цена</span><span>Бейдж</span><span>Действие</span>
        </div>

        {visible.map(product => (
          <div className="adminRow" key={product.slug}>
            <div>
              <b>{product.name}</b>
              <small>/product/{product.slug}</small>
            </div>
            <span>{product.category}</span>
            <input value={product.price} onChange={e => update(product.slug, 'price', e.target.value)} />
            <input value={product.badge || 'В наличии'} onChange={e => update(product.slug, 'badge', e.target.value)} />
            <button className="btn small" onClick={() => saveProduct(product)}>Сохранить</button>
          </div>
        ))}
      </section>
    </AdminLayout>
  )
}
