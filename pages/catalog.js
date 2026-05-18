import { useMemo, useState } from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
import categories from '../data/categories.json'

export default function Catalog(){
  const [cat, setCat] = useState('all')
  const [sort, setSort] = useState('popular')
  const items = useMemo(()=>{
    let arr = cat === 'all' ? [...products] : products.filter(p=>p.category===cat)
    if (sort === 'name') arr.sort((a,b)=>a.name.localeCompare(b.name))
    return arr
  }, [cat, sort])

  return <Layout>
    <Seo title="Каталог | iDanny" description="Каталог товаров iDanny" canonical="https://idanny.ru/catalog"/>
    <section className="pageHead"><h1>Каталог</h1><p>Все категории товаров iDanny.</p></section>
    <section className="catalogLayout">
      <aside className="filters">
        <h3>Фильтры</h3>
        <button onClick={()=>setCat('all')} className={cat==='all'?'active':''}>Все товары</button>
        {categories.map(c=><button key={c.slug} onClick={()=>setCat(c.slug)} className={cat===c.slug?'active':''}>{c.icon} {c.name}</button>)}
        <h3>Сортировка</h3>
        <select value={sort} onChange={e=>setSort(e.target.value)}><option value="popular">Сначала популярные</option><option value="name">По названию</option></select>
      </aside>
      <section className="grid catalogGrid">{items.map(p=><ProductCard key={p.slug} p={p}/>)}</section>
    </section>
  </Layout>
}
