import Link from 'next/link'
import { useEffect, useState } from 'react'

function addLS(key, value) {
  const current = JSON.parse(localStorage.getItem(key) || '[]')
  if (!current.includes(value)) current.push(value)
  localStorage.setItem(key, JSON.stringify(current))
  window.dispatchEvent(new Event('storage'))
}

export default function ProductCard({p}) {
  const [ok, setOk] = useState('')
  return <article className="productCard">
    {p.badge ? <span className="badge">{p.badge}</span> : null}
    <button className="wish" onClick={()=>{addLS('favorites', p.slug); setOk('В избранном')}}>♡</button>
    <Link href={`/product/${p.slug}`} className="imageBox"><span>{p.icon}</span></Link>
    <Link href={`/product/${p.slug}`}><h3>{p.name}</h3></Link>
    <p>{p.categoryName}</p>
    <div className="specs"><span>{p.color}</span><span>{p.variant}</span></div>
    <div className="price">{p.price}</div>
    <div className="cardActions">
      <Link href={`/product/${p.slug}`} className="more">Подробнее</Link>
      <button onClick={()=>{addLS('cart', p.slug); setOk('В корзине')}}>🛒</button>
    </div>
    {ok && <small className="ok">{ok}</small>}
  </article>
}
