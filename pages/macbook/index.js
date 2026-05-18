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
  const categoryProducts = products.filter(p => p.category === "MacBook")

  return (
    <Layout>
      <Seo title="MacBook" description="MacBook Neo, Air и Pro. В Pro только версии начиная с M4." canonical="https://idanny.ru/macbook" />
      <section className="pageHero">
        <span className="badge">iDanny catalog</span>
        <h1>MacBook</h1>
        <p>MacBook Neo, Air и Pro. В Pro только версии начиная с M4.</p>
      </section>
      <section className="grid">{categoryProducts.map(p => <ProductCard product={p} key={p.slug} />)}</section>
      <section className="seoBlock">
        <h2>MacBook: коммерческая SEO-страница</h2>
        <p>MacBook Neo, Air и Pro. В Pro только версии начиная с M4. В этом разделе каждая важная конфигурация получает отдельную карточку с чистым URL, H1, title, description, schema.org Product и внутренней перелинковкой. Это помогает Яндексу понимать ассортимент магазина и выводить iDanny по коммерческим long-tail запросам.</p>
      </section>
    <InternalLinks title="Полезное перед покупкой" type="trust" />
        </Layout>
  )
}