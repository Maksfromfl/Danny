import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
export default function Page(){const items=products.filter(p=>p.category==='Ray-Ban Meta');return <Layout><Seo title="Ray-Ban Meta | iDanny" description="Ray-Ban Meta в iDanny" canonical="https://idanny.ru/meta-rayban"/><section className="pageHero"><h1>Ray-Ban Meta</h1><p>Оригинальная техника в наличии. Проверка при получении и доставка по России.</p></section><section className="grid">{items.map(p=><ProductCard key={p.slug} p={p}/>)}</section></Layout>}
