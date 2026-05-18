import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import ProductCard from '../../components/ProductCard'
import InternalLinks from '../../components/InternalLinks'
import { getProducts } from '../../lib/productsDb'

export async function getServerSideProps() {
  const products = await getProducts()
  return { props: { products } }
}

export default function Page({ products }) {
  const categoryProducts = products.filter(p => p.category === "iPhone")

  return (
    <Layout>
      <Seo title="iPhone 17" description="iPhone 17, 17 Air, 17 Pro и 17 Pro Max с корректной SIM-логикой и уникальными product URL." canonical="https://idanny.ru/iphone" />
      <section className="pageHero">
        <span className="badge">iDanny catalog</span>
        <h1>iPhone 17</h1>
        <p>iPhone 17, 17 Air, 17 Pro и 17 Pro Max с корректной SIM-логикой и уникальными product URL.</p>
      </section>
      <section className="grid">{categoryProducts.map(p => <ProductCard product={p} key={p.slug} />)}</section>
      <section className="seoBlock">
        <h2>iPhone 17: коммерческая SEO-страница</h2>
        <p>iPhone 17, 17 Air, 17 Pro и 17 Pro Max с корректной SIM-логикой и уникальными product URL. В этом разделе каждая важная конфигурация получает отдельную карточку с чистым URL, H1, title, description, schema.org Product и внутренней перелинковкой. Это помогает Яндексу понимать ассортимент магазина и выводить iDanny по коммерческим long-tail запросам.</p>
      </section>
    <InternalLinks title="Полезное перед покупкой" type="trust" />
        </Layout>
  )
}