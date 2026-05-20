import Link from 'next/link'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
import categories from '../data/categories.json'
export default function Home(){const hits=products.filter(p=>p.badge).slice(0,10);return <Layout><Seo title="iDanny — Premium Apple Store"/><section className="hero"><div><span className="eyebrow">Premium e-commerce</span><h1>Apple и Ray‑Ban Meta в эффектной витрине.</h1><p>Dark premium UI, красивые баннеры, локальные product visuals, каталог, карточки, страницы товаров и админка.</p><div className="heroBtns"><Link className="primary" href="/catalog">Открыть каталог</Link><Link className="secondary" href="/category/iphone">iPhone 17</Link></div></div><div className="heroPics"><img className="mainDevice" src="/products/iphone-17-pro-max-512gb.svg"/><img src="/products/macbook-pro-14-m4.svg"/><img src="/products/ray-ban-meta-wayfarer.svg"/></div></section><section className="cats">{categories.map(c=><Link key={c.slug} href={`/category/${c.slug}`}><b>{c.name}</b><span>{c.subtitle}</span></Link>)}</section><section className="title"><h2>Хиты продаж</h2><Link href="/catalog">Все товары</Link></section><section className="grid">{hits.map(p=><ProductCard key={p.slug} p={p}/>)}</section></Layout>}
