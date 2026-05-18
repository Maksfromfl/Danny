import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
export default function Catalog(){return <Layout><Seo title="Каталог | iDanny" description="Каталог товаров iDanny" canonical="https://idanny.ru/catalog"/><section className="page"><h1>Каталог</h1><p>Все товары iDanny: смартфоны, ноутбуки, планшеты, наушники, Ray-Ban Meta и аксессуары.</p></section><section className="grid">{products.map(p=><ProductCard key={p.slug} p={p}/>)}</section></Layout>}
