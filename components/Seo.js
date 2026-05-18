import Head from 'next/head'
export default function Seo({ title, description, jsonLd }) {
  const t = title ? `${title} — iDanny` : 'iDanny — premium Apple & future tech store'
  const d = description || 'iDanny — премиальный магазин Apple, MacBook, iPad, iPhone и Meta Ray-Ban с доставкой по всей России.'
  return <Head><title>{t}</title><meta name="description" content={d}/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta property="og:title" content={t}/><meta property="og:description" content={d}/><meta name="theme-color" content="#0B1020"/>{jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} />}</Head>
}
