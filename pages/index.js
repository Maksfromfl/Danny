import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
import categories from '../data/categories.json'
import Link from 'next/link'

export default function Home(){
  return <Layout>
    <Seo title="iDanny — магазин техники Apple и Ray-Ban Meta" description="Каталог iPhone, MacBook, iPad, AirPods, Apple Watch, Ray-Ban Meta и аксессуаров."/>
    <section className="hero">
      <button className="arrow">‹</button>
      <div className="heroText">
        <span className="badge">НОВИНКА</span>
        <h1>iPhone 17 Pro</h1>
        <h2>Титан. Мощь. Красота.</h2>
        <p>Оригинальная техника, гарантия, проверка при получении и доставка по России.</p>
        <div className="heroCta"><Link href="/category/iphone">Купить сейчас</Link><b>от 169 990 ₽</b></div>
      </div>
      <div className="heroVisual">📱</div>
      <button className="arrow">›</button>
    </section>

    <section className="categoryRail">
      {categories.map(c => <Link href={`/category/${c.slug}`} key={c.slug} className="catTile"><span>{c.icon}</span><p>{c.name}</p></Link>)}
      <Link href="/catalog" className="catTile all"><span>→</span><p>Все категории</p></Link>
    </section>

    <section className="benefits">
      <div><b>4.9★</b><p>Отзывы покупателей</p></div>
      <div><b>RF</b><p>Доставка по России</p></div>
      <div><b>100%</b><p>Проверка при получении</p></div>
      <div><b>SIM</b><p>Версии для России</p></div>
    </section>

    <section className="sectionTitle"><h2>Популярные товары</h2><Link href="/catalog">Смотреть все</Link></section>
    <section className="grid">{products.slice(0,12).map(p => <ProductCard key={p.slug} p={p}/>)}</section>
  </Layout>
}
