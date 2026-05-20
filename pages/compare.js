import {useEffect,useState} from 'react'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
export default function Page(){const[items,setItems]=useState([]);useEffect(()=>{const s=JSON.parse(localStorage.getItem('compare')||'[]');setItems(products.filter(p=>s.includes(p.slug)))},[]);return <Layout><section className="pageHead"><h1>Сравнение</h1><p>Сохранённые товары.</p></section><section className="grid">{items.length?items.map(p=><ProductCard key={p.slug} p={p}/>):<div className="empty">Пока пусто.</div>}</section></Layout>}
