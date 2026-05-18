import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import ProductCard from '../../components/ProductCard'
import products from '../../data/products.json'
import categories from '../../data/categories.json'
export async function getStaticPaths(){return{paths:categories.map(c=>({params:{slug:c.slug}})),fallback:false}}
export async function getStaticProps({params}){const cat=categories.find(c=>c.slug===params.slug);const items=products.filter(p=>p.cat===params.slug);return{props:{cat,items}}}
export default function Category({cat,items}){return <Layout><Seo title={`${cat.name} | iDanny`} description={`${cat.name} в iDanny`} canonical={`https://idanny.ru/category/${cat.slug}`}/><section className="page"><h1>{cat.name}</h1><p>Оригинальная техника. В наличии, гарантия, проверка при получении.</p></section><section className="grid">{items.length?items.map(p=><ProductCard key={p.slug} p={p}/>):<div className="empty">Товары скоро будут добавлены.</div>}</section></Layout>}
