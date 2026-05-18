import Link from 'next/link'
import { useState } from 'react'
import products from '../data/products.json'

export default function Layout({children}) {
  const [query, setQuery] = useState('')
  const results = query.trim() ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).slice(0,5) : []

  return <>
    <header className="header">
      <div className="topline">
        <Link href="/" className="brand"><span className="bolt">⚡</span><b>iDanny</b><small>Электроника для жизни</small></Link>
        <Link href="/catalog" className="catalogBtn">☰ Каталог</Link>
        <div className="searchBox">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Поиск товаров..." />
          <span>⌕</span>
          {results.length > 0 && <div className="searchResults">{results.map(p=><Link key={p.slug} href={`/product/${p.slug}`}>{p.icon} {p.name}<b>{p.price}</b></Link>)}</div>}
        </div>
        <div className="headLinks">
          <Link href="/compare">⇄ Сравнение</Link>
          <Link href="/favorites">♡ Избранное</Link>
          <Link href="/cart">🛒 Корзина</Link>
          <Link href="/account">♙ Войти</Link>
        </div>
      </div>
      <nav className="nav">
        <Link href="/">Главная</Link>
        <Link href="/catalog">Каталог</Link>
        <Link href="/sale">Акции</Link>
        <Link href="/brands">Бренды</Link>
        <Link href="/journal">Блог</Link>
        <Link href="/delivery">Доставка и оплата</Link>
        <Link href="/contacts">Контакты</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <div><b>iDanny</b><p>Premium tech store в тёмной сине‑фиолетовой гамме.</p></div>
      <Link href="/about">О компании</Link>
      <Link href="/delivery">Доставка</Link>
      <Link href="/warranty">Гарантия</Link>
      <Link href="/payment">Оплата</Link>
      <Link href="/contacts">Контакты</Link>
      <Link href="/faq">FAQ</Link>
    </footer>
  </>
}
