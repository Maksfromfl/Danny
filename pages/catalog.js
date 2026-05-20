import {useMemo,useState} from 'react'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
import categories from '../data/categories.json'
export default function Catalog(){const[cat,setCat]=useState('all');const[q,setQ]=useState('');const items=useMemo(()=>products.filter(p=>(cat==='all'||p.category===cat)&&p.name.toLowerCase().includes(q.toLowerCase())),[cat,q]);return <Layout><section className="pageHead"><h1>Каталог</h1><p>Фильтры, поиск и все категории товаров.</p></section><section className="catalogPage"><aside><button className={cat==='all'?'active':''} onClick={()=>setCat('all')}>Все товары</button>{categories.map(c=><button className={cat===c.slug?'active':''} key={c.slug} onClick={()=>setCat(c.slug)}>{c.name}</button>)}<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Поиск"/></aside><div><p className="count">{items.length} товаров</p><section className="grid catalogGrid">{items.map(p=><ProductCard key={p.slug} p={p}/>)}</section></div></section></Layout>}
