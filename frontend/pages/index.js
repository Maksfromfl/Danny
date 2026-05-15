
import { useState } from 'react'
import ProductCard from '../components/ProductCard'

const products = [
  {
    id: 1,
    name: 'iPhone Pro X',
    category: 'Смартфоны',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200'
  },
  {
    id: 2,
    name: 'Gaming Laptop',
    category: 'Ноутбуки',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200'
  },
  {
    id: 3,
    name: 'AirSound Max',
    category: 'Наушники',
    price: 299,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200'
  }
]

export default function Home() {
  const [filter, setFilter] = useState('Все')

  const filtered = filter === 'Все'
    ? products
    : products.filter(p => p.category === filter)

  return (
    <div>
      <header className="header">
        <h1>⚡ ElectroShop Pro</h1>
        <div className="actions">
          <button>🛒 Корзина</button>
          <button>🌙 Тема</button>
        </div>
      </header>

      <section className="hero">
        <h2>Технологии будущего</h2>
        <p>Премиальная электроника с быстрой доставкой</p>
      </section>

      <section className="filters">
        <button onClick={() => setFilter('Все')}>Все</button>
        <button onClick={() => setFilter('Смартфоны')}>Смартфоны</button>
        <button onClick={() => setFilter('Ноутбуки')}>Ноутбуки</button>
        <button onClick={() => setFilter('Наушники')}>Наушники</button>
      </section>

      <section className="grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <section className="admin">
        <h2>Админ-панель</h2>
        <p>Управление товарами, заказами и пользователями</p>
      </section>
    </div>
  )
}
