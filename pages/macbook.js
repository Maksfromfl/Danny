import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
export default function Page(){const items=products.filter(p=>p.category==='MacBook');return <Layout><Seo title="MacBook | iDanny" description="MacBook в iDanny" canonical="https://idanny.ru/macbook"/><section className="pageHero"><h1>MacBook</h1><p>Оригинальная техника в наличии. Проверка при получении и доставка по России.</p></section><section className="grid">{items.map(p=><ProductCard key={p.slug} p={p}/>)}</section></Layout>}
