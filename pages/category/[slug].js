import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import ProductCard from '../../components/ProductCard'
import products from '../../data/products.json'
import categories from '../../data/categories.json'
export async function getStaticPaths(){return{paths:categories.map(c=>({params:{slug:c.slug}})),fallback:false}}
export async function getStaticProps({params}){const category=categories.find(c=>c.slug===params.slug);const items=products.filter(p=>p.category===params.slug);return{props:{category,items}}}
export default function Category({category,items}){return <Layout><Seo title={`${category.name} | iDanny`} description={category.subtitle} canonical={`https://idanny.ru/category/${category.slug}`}/><section className="pageHero"><span className="eyebrow">{category.emoji} {category.name}</span><h1>{category.name}</h1><p>{category.subtitle}</p></section><section className="grid">{items.map(p=><ProductCard key={p.slug} product={p}/>)}</section></Layout>}
