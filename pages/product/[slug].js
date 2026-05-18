import { useState } from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import ProductCard from '../../components/ProductCard'
import products from '../../data/products.json'

export async function getStaticPaths(){ return { paths: products.map(p=>({params:{slug:p.slug}})), fallback:false } }
export async function getStaticProps({params}){ return { props:{ product: products.find(p=>p.slug===params.slug) } } }

export default function Product({product}){
  const [msg, setMsg] = useState('')
  const related = products.filter(p=>p.category===product.category && p.slug!==product.slug).slice(0,4)
  const add = (key) => {
    const arr = JSON.parse(localStorage.getItem(key) || '[]')
    if (!arr.includes(product.slug)) arr.push(product.slug)
    localStorage.setItem(key, JSON.stringify(arr))
    setMsg(key === 'cart' ? 'Добавлено в корзину' : 'Добавлено в избранное')
  }
  return <Layout>
    <Seo title={`${product.name} | iDanny`} description={product.desc} canonical={`https://idanny.ru/product/${product.slug}`}/>
    <section className="productPage">
      <div className="bigImage">{product.icon}</div>
      <div className="productInfo">
        <span className="badge">В наличии</span>
        <h1>{product.name}</h1>
        <p>{product.desc}</p>
        <div className="specList"><span>Цвет: {product.color}</span><span>Версия: {product.variant}</span><span>Категория: {product.categoryName}</span></div>
        <div className="bigPrice">{product.price}</div>
        <button className="buy" onClick={()=>add('cart')}>Добавить в корзину</button>
        <button className="buy ghost" onClick={()=>add('favorites')}>В избранное</button>
        {msg && <p className="success">{msg}</p>}
      </div>
    </section>
    <section className="sectionTitle"><h2>Похожие товары</h2></section>
    <section className="grid">{related.map(p=><ProductCard key={p.slug} p={p}/>)}</section>
  </Layout>
}
