import {useEffect,useState} from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

export default function Page(){
  const [items,setItems]=useState([])
  useEffect(()=>{ const slugs=JSON.parse(localStorage.getItem('compare')||'[]'); setItems(products.filter(p=>slugs.includes(p.slug))) },[])
  return <Layout><Seo title="Сравнение | iDanny" description="Товары для сравнения." canonical="https://idanny.ru/compare"/><section className="pageHead"><h1>Сравнение</h1><p>Товары для сравнения.</p></section><section className="grid">{items.length?items.map(p=><ProductCard key={p.slug} p={p}/>):<div className="empty">Пока пусто. Добавьте товары из каталога.</div>}</section></Layout>
}
