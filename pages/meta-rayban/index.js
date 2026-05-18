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
  const categoryProducts = products.filter(p => p.category === "Meta \u00d7 Ray-Ban")

  return (
    <Layout>
      <Seo title="Meta × Ray-Ban" description="Ray-Ban Meta Wayfarer, Headliner, Skyler Gen 1 и Gen 2." canonical="https://idanny.ru/meta-rayban" />
      <section className="pageHero">
        <span className="badge">iDanny catalog</span>
        <h1>Meta × Ray-Ban</h1>
        <p>Ray-Ban Meta Wayfarer, Headliner, Skyler Gen 1 и Gen 2.</p>
      </section>
      <section className="grid">{categoryProducts.map(p => <ProductCard product={p} key={p.slug} />)}</section>
      <section className="seoBlock">
        <h2>Meta × Ray-Ban: коммерческая SEO-страница</h2>
        <p>Ray-Ban Meta Wayfarer, Headliner, Skyler Gen 1 и Gen 2. В этом разделе каждая важная конфигурация получает отдельную карточку с чистым URL, H1, title, description, schema.org Product и внутренней перелинковкой. Это помогает Яндексу понимать ассортимент магазина и выводить iDanny по коммерческим long-tail запросам.</p>
      </section>
    <InternalLinks title="Полезное перед покупкой" type="trust" />
        </Layout>
  )
}