import Layout from './Layout'
import Seo from './Seo'
import ProductCard from './ProductCard'
export default function CategoryPage({ title, subtitle, products, seoText, faq=[] }) {
  const jsonLd={'@context':'https://schema.org','@type':'CollectionPage',name:title,description:subtitle}
  return <Layout><Seo title={title} description={subtitle} jsonLd={jsonLd}/><section className="pageHero compact"><span className="badge">iDanny catalog</span><h1>{title}</h1><p>{subtitle}</p></section><section className="catalogTools"><div className="searchBox">Поиск по модели, памяти, цвету или типу SIM</div><div className="filterPills"><span>В наличии</span><span>Доставка по РФ</span><span>Оригинальные устройства</span><span>Проверка при получении</span></div></section><section className="grid">{products.map(p=><ProductCard product={p} key={p.name}/>)}</section><section className="seoBlock"><h2>{title}: SEO-описание категории</h2><p>{seoText}</p></section>{faq.length>0 && <section className="faqBlock"><h2>FAQ</h2>{faq.map(item=><details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>}</Layout>
}
