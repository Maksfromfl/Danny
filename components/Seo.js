import Head from 'next/head'

export default function Seo({ title, description, canonical, jsonLd }) {
  const fullTitle = title ? `${title} — iDanny` : 'iDanny — premium Apple & future tech store'
  const desc = description || 'iDanny — премиальный интернет-магазин Apple, MacBook, iPad, iPhone и Meta Ray-Ban с доставкой по всей России.'
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta name="theme-color" content="#0B1020" />
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
    </Head>
  )
}