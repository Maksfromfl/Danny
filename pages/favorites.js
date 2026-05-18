import {useEffect,useState} from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

export default function Page(){
  const [items,setItems]=useState([])
  useEffect(()=>{ const slugs=JSON.parse(localStorage.getItem('favorites')||'[]'); setItems(products.filter(p=>slugs.includes(p.slug))) },[])
  return <Layout><Seo title="Избранное | iDanny" description="Сохранённые товары." canonical="https://idanny.ru/favorites"/><section className="pageHead"><h1>Избранное</h1><p>Сохранённые товары.</p></section><section className="grid">{items.length?items.map(p=><ProductCard key={p.slug} p={p}/>):<div className="empty">Пока пусто. Добавьте товары из каталога.</div>}</section></Layout>
}
