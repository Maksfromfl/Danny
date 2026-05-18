import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import ProductCard from '../../components/ProductCard'
import products from '../../data/products.json'
export async function getStaticPaths(){return{paths:products.map(p=>({params:{slug:p.slug}})),fallback:false}}
export async function getStaticProps({params}){return{props:{product:products.find(p=>p.slug===params.slug)}}}
export default function Product({product}){const related=products.filter(p=>p.cat===product.cat&&p.slug!==product.slug).slice(0,4);return <Layout><Seo title={`${product.name} | iDanny`} description={product.desc} canonical={`https://idanny.ru/product/${product.slug}`}/><section className="product"><div className="bigpic">{product.icon}</div><div className="info"><span className="tag">В наличии</span><h1>{product.name}</h1><p>{product.desc}</p><div className="bigprice">{product.price}</div><button className="buy">Добавить в корзину</button><button className="buy second">Купить в 1 клик</button><ul><li>Оригинальная техника</li><li>Гарантия</li><li>Проверка при получении</li><li>Доставка по России</li></ul></div></section><section className="title"><h2>Похожие товары</h2></section><section className="grid">{related.map(p=><ProductCard key={p.slug} p={p}/>)}</section></Layout>}
