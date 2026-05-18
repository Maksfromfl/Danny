import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import products from '../../data/products.json'
import Link from 'next/link'
export async function getStaticPaths(){return{paths:products.map(p=>({params:{slug:p.slug}})),fallback:false}}
export async function getStaticProps({params}){return{props:{product:products.find(p=>p.slug===params.slug)}}}
export default function Product({product}){const related=products.filter(p=>p.category===product.category&&p.slug!==product.slug).slice(0,3);return <Layout><Seo title={`${product.name} | iDanny`} description={product.desc} canonical={`https://idanny.ru/product/${product.slug}`}/><section className="productPage"><div className="productVisual">{product.emoji}</div><div className="productInfo"><span className="badge">В наличии</span><h1>{product.name}</h1><p>{product.desc}</p><div className="price">{product.price}</div><button className="btn">Купить</button><button className="btn ghost">Помощь с подбором</button></div></section><section className="commercialGrid">{related.map(p=><article key={p.slug}><h2>{p.name}</h2><p>{p.price}</p><Link href={`/product/${p.slug}`}>Смотреть</Link></article>)}</section></Layout>}
