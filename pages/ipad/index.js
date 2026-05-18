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
  const categoryProducts = products.filter(p => p.category === "iPad")

  return (
    <Layout>
      <Seo title="iPad" description="iPad A16, iPad Air M3/M4 и iPad Pro M4/M5 с SEO-страницами." canonical="https://idanny.ru/ipad" />
      <section className="pageHero">
        <span className="badge">iDanny catalog</span>
        <h1>iPad</h1>
        <p>iPad A16, iPad Air M3/M4 и iPad Pro M4/M5 с SEO-страницами.</p>
      </section>
      <section className="grid">{categoryProducts.map(p => <ProductCard product={p} key={p.slug} />)}</section>
      <section className="seoBlock">
        <h2>iPad: коммерческая SEO-страница</h2>
        <p>iPad A16, iPad Air M3/M4 и iPad Pro M4/M5 с SEO-страницами. В этом разделе каждая важная конфигурация получает отдельную карточку с чистым URL, H1, title, description, schema.org Product и внутренней перелинковкой. Это помогает Яндексу понимать ассортимент магазина и выводить iDanny по коммерческим long-tail запросам.</p>
      </section>
    <InternalLinks title="Полезное перед покупкой" type="trust" />
        </Layout>
  )
}