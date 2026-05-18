import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
export default function Page(){const items=products.filter(p=>p.category==='iPad');return <Layout><Seo title="iPad | iDanny" description="iPad в iDanny" canonical="https://idanny.ru/ipad"/><section className="pageHero"><h1>iPad</h1><p>Оригинальная техника в наличии. Проверка при получении и доставка по России.</p></section><section className="grid">{items.map(p=><ProductCard key={p.slug} p={p}/>)}</section></Layout>}
