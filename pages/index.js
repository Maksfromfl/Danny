import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
import categories from '../data/categories.json'
import Link from 'next/link'
export default function Home(){return <Layout><Seo title="iDanny — каталог техники" description="iPhone 17, MacBook, iPad, AirPods, Apple Watch, Ray-Ban Meta."/><section className="hero"><button className="arrow">‹</button><div><span className="tag">НОВИНКА</span><h1>iPhone 17 Pro</h1><h2>Титан. Мощь. Красота.</h2><p>iPhone 17 Pro — актуальный флагман для тех, кто требует большего.</p><div className="herocta"><Link href="/category/smartphones">Купить сейчас</Link><b>от 159 990 ₽</b></div></div><div className="phone">📱</div><button className="arrow">›</button></section><section className="catbar">{categories.map(c=><Link href={`/category/${c.slug}`} key={c.slug} className="cat"><span>{c.icon}</span><p>{c.name}</p></Link>)}</section><section className="title"><h2>Популярные товары</h2><Link href="/catalog">Смотреть все</Link></section><section className="grid">{products.slice(0,8).map(p=><ProductCard key={p.slug} p={p}/>)}</section></Layout>}
