import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
export default function Page(){const items=products.filter(p=>p.category==='iPhone 17');return <Layout><Seo title="iPhone 17 | iDanny" description="iPhone 17 в iDanny" canonical="https://idanny.ru/iphone"/><section className="pageHero"><h1>iPhone 17</h1><p>Оригинальная техника в наличии. Проверка при получении и доставка по России.</p></section><section className="grid">{items.map(p=><ProductCard key={p.slug} p={p}/>)}</section></Layout>}
