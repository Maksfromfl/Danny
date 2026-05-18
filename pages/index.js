import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
import Link from 'next/link'
export default function Home(){return <Layout><Seo title="iDanny — оригинальная техника Apple и Ray-Ban Meta" description="iPhone 17, MacBook, iPad и Ray-Ban Meta. В наличии, гарантия, проверка при получении, доставка по России."/><section className="hero"><div><span className="badge">Premium tech store</span><h1>iDanny — Apple, Meta и техника для жизни.</h1><p>Оригинальная техника, гарантия, проверка при получении, доставка по России и помощь с подбором.</p><div className="actions"><Link className="btn" href="/iphone">Смотреть iPhone 17</Link><Link className="btn ghost" href="/meta-rayban">Ray-Ban Meta</Link></div></div><div className="heroCard"><span>В наличии</span><h2>iPhone 17 Pro Max</h2><p>Deep Blue · SIM + eSIM</p></div></section><section className="trust"><div>Оригинальная техника</div><div>Гарантия</div><div>Проверка при получении</div><div>Доставка по России</div></section><section className="grid">{products.map(p=><ProductCard key={p.slug} p={p}/>)}</section></Layout>}
