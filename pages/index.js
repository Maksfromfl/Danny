import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../lib/productsDb'
import Link from 'next/link'

export async function getServerSideProps() {
  const products = await getProducts()
  return { props: { products } }
}

export default function Home({ products }) {
  const featured = products.slice(0, 8)
  return (
    <Layout>
      <Seo title="Premium Apple & future tech store" description="iDanny — магазин iPhone 17, MacBook, iPad и Ray-Ban Meta с уникальными SEO URL, доставкой по России и проверкой при получении." canonical="https://idanny.ru" />
      <section className="hero">
        <div>
          <span className="badge">SEO-first premium store</span>
          <h1>iDanny — магазин, который продаёт.</h1>
          <p>Apple, Meta × Ray-Ban и premium gadgets. Уникальные карточки товаров, понятные URL, доставка по всей России и доверие покупателей.</p>
          <div className="heroActions">
            <Link className="btn" href="/iphone">Смотреть iPhone 17</Link>
            <Link className="btn secondary" href="/meta-rayban">Meta × Ray-Ban</Link>
          </div>
        </div>
        <div className="heroPanel">
          <h2>Product SEO URLs</h2>
          <code>/product/iphone-17-pro-max-2tb-silver-physical-sim-plus-esim</code>
        </div>
      </section>

      <section className="trustStrip">
        <div><b>Unique URLs</b><span>карточки под SEO</span></div>
        <div><b>Schema</b><span>Product + Offer</span></div>
        <div><b>Yandex</b><span>commercial trust</span></div>
        <div><b>Mobile</b><span>bottom nav + fast UX</span></div>
      </section>

      <section className="categoryTiles">
        <Link href="/iphone"><span>📱</span><b>iPhone 17</b><small>SIM variants</small></Link>
        <Link href="/macbook"><span>💻</span><b>MacBook</b><small>Neo / Air / Pro M4+</small></Link>
        <Link href="/ipad"><span>📲</span><b>iPad</b><small>A16 / Air / Pro</small></Link>
        <Link href="/meta-rayban"><span>🕶</span><b>Meta × Ray-Ban</b><small>Gen 1 / Gen 2</small></Link>
      </section>

      <section className="sectionHead"><h2>SEO-карточки товаров</h2><Link href="/iphone">В каталог →</Link></section>
      <section className="grid">{featured.map(p => <ProductCard product={p} key={p.slug} />)}</section>
    </Layout>
  )
}