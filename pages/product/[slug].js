import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { getProductBySlug } from '../../lib/productsDb'
import Link from 'next/link'
import InternalLinks from '../../components/InternalLinks'

const buildCleanH1 = (product) => {
  if (product.category === 'iPhone') {
    return `${product.model} ${product.memory} ${product.color}`.trim()
  }

  if (product.category === 'MacBook') {
    return product.name
      .replace(/ Space Black| Sky Blue| Midnight| Silver| Starlight/g, '')
      .trim()
  }

  if (product.category === 'iPad') {
    return product.name
      .replace(/ Space Black| Blue| Purple| Silver| Pink| Yellow/g, '')
      .replace(/ WiFi/g, '')
      .trim()
  }

  if (product.category === 'Meta × Ray-Ban') {
    return product.name
      .replace(/ Large| Standard| Matte Black| Black| Chalk Grey| Polarized Green| Transitions| Clear/g, '')
      .trim()
  }

  return product.name
}


const getCategorySlug = (product) => {
  if (product.category === 'Meta × Ray-Ban') return 'meta-rayban'
  return product.category.toLowerCase()
}

const getBreadcrumbs = (product) => {
  return [
    { name: 'Главная', href: '/' },
    { name: product.category, href: `/${getCategorySlug(product)}` },
    { name: product.model, href: `/${getCategorySlug(product)}` },
    { name: buildCleanH1(product), href: `/product/${product.slug}` }
  ]
}

const getProductSpecs = (product) => {
  const base = [
    ['Модель', product.model],
    ['Категория', product.category],
    ['Память', product.memory || '—'],
    ['Цвет', product.color || '—'],
    ['Конфигурация', product.category === 'iPhone' ? normalizeSimLabel(product.sim) : (product.sim || '—')],
    ['Состояние', 'Новый товар'],
    ['Доставка', 'По всей России'],
    ['Гарантия', 'Гарантия iDanny'],
    ['Проверка', 'При получении'],
    ['SKU', product.sku]
  ]

  if (product.category === 'iPhone') {
    return [
      ...base,
      ['SIM', normalizeSimLabel(product.sim)],
      ['Региональная рекомендация', normalizeSimLabel(product.sim) === 'SIM + eSIM' ? 'Рекомендуем для России' : 'eSIM-версия']
    ]
  }

  if (product.category === 'MacBook') {
    return [
      ...base,
      ['Линейка', product.model.includes('Pro') ? 'Pro M4+' : product.model.includes('Air') ? 'Air' : 'Neo'],
      ['Назначение', product.model.includes('Pro') ? 'Монтаж, разработка, профессиональные задачи' : 'Работа, учеба, повседневные задачи']
    ]
  }

  if (product.category === 'iPad') {
    return [
      ...base,
      ['Связь', product.sim || 'Wi‑Fi'],
      ['Назначение', product.model.includes('Pro') ? 'Профессиональная работа и творчество' : 'Учеба, работа, контент']
    ]
  }

  if (product.category === 'Meta × Ray-Ban') {
    return [
      ...base,
      ['Поколение', product.name.includes('Gen 2') ? '2nd Generation' : '1st Generation'],
      ['Сценарии', 'Фото, видео, звонки, музыка, smart glasses']
    ]
  }

  return base
}


const getRelatedLinks = (product) => {
  if (product.category === 'iPhone') {
    return [
      { title: 'Все iPhone 17', href: '/iphone' },
      { title: 'FAQ по SIM и доставке', href: '/faq' },
      { title: 'Проверка при получении', href: '/inspection' }
    ]
  }
  if (product.category === 'MacBook') {
    return [
      { title: 'Все MacBook', href: '/macbook' },
      { title: 'Гарантия', href: '/warranty' },
      { title: 'Оплата', href: '/payment' }
    ]
  }
  if (product.category === 'iPad') {
    return [
      { title: 'Все iPad', href: '/ipad' },
      { title: 'Доставка по России', href: '/delivery' },
      { title: 'FAQ', href: '/faq' }
    ]
  }
  return [
    { title: 'Все Ray-Ban Meta', href: '/meta-rayban' },
    { title: 'Ray-Ban Meta Gen 1 vs Gen 2', href: '/journal/rayban-meta-gen1-vs-gen2' },
    { title: 'Проверка при получении', href: '/inspection' }
  ]
}

const getProductFaq = (product) => {
  const common = [
    {
      q: 'Можно ли проверить товар при получении?',
      a: 'Да, в iDanny предусмотрена проверка внешнего вида, комплектности и основных характеристик устройства при получении.'
    },
    {
      q: 'Есть ли доставка по России?',
      a: 'Да, iDanny закладывает доставку по всей России через курьерские и транспортные службы.'
    },
    {
      q: 'Есть ли гарантия?',
      a: 'Да, для товаров iDanny предусмотрена гарантия и поддержка по вопросам обслуживания.'
    }
  ]

  if (product.category === 'iPhone') {
    return [
      {
        q: `Какая SIM-конфигурация у ${product.model}?`,
        a: `${product.name} указан в конфигурации ${normalizeSimLabel(product.sim)}. Для iPhone Air используется только eSIM + eSIM.`
      },
      ...common
    ]
  }

  if (product.category === 'MacBook') {
    return [
      {
        q: 'Подходит ли этот MacBook для работы?',
        a: 'Да, карточка содержит конфигурацию для рабочих задач. Для тяжёлой нагрузки лучше выбирать MacBook Pro на M4 Pro или M4 Max.'
      },
      ...common
    ]
  }

  if (product.category === 'iPad') {
    return [
      {
        q: 'Что выбрать: Wi‑Fi или Cellular?',
        a: 'Wi‑Fi подходит для дома и офиса. Cellular нужен, если планшет часто используется в дороге с мобильным интернетом.'
      },
      ...common
    ]
  }

  return [
    {
      q: 'Чем полезны Ray-Ban Meta?',
      a: 'Это smart glasses для фото, видео, звонков, музыки и hands-free сценариев. Поколение и линзы указаны в характеристиках.'
    },
    ...common
  ]
}

const normalizeSimLabel = (sim) => {
  if (!sim) return ''
  if (sim.includes('Dual eSIM') || sim.includes('eSIM only')) return 'eSIM + eSIM'
  if (sim.includes('Physical SIM')) return 'SIM + eSIM'
  return sim
}


export async function getServerSideProps({ params }) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    return { notFound: true }
  }

  return { props: { product } }
}

export default function ProductPage({ product }) {
  const productUrl = `https://idanny.ru/product/${product.slug}`
  const cleanPrice = product.price.replace(/[^0-9]/g, '')
  const brandName = product.category === 'Meta × Ray-Ban'
    ? 'Ray-Ban Meta'
    : product.category === 'iPhone' || product.category === 'MacBook' || product.category === 'iPad'
      ? 'Apple'
      : product.category

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${productUrl}#product`,
      name: buildCleanH1(product),
      image: [product.img],
      description: `${product.name} в iDanny. Оригинал, гарантия, доставка по России, проверка при получении.`,
      sku: product.sku,
      mpn: product.sku,
      brand: {
        '@type': 'Brand',
        name: brandName
      },
      category: product.category,
      color: product.color || undefined,
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Модель', value: product.model },
        { '@type': 'PropertyValue', name: 'Память', value: product.memory || '—' },
        { '@type': 'PropertyValue', name: 'Цвет', value: product.color || '—' },
        { '@type': 'PropertyValue', name: 'Конфигурация', value: product.category === 'iPhone' ? normalizeSimLabel(product.sim) : (product.sim || '—') }
      ],
      offers: {
        '@type': 'Offer',
        '@id': `${productUrl}#offer`,
        url: productUrl,
        priceCurrency: 'RUB',
        price: cleanPrice,
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        seller: {
          '@type': 'Organization',
          name: 'iDanny',
          url: 'https://idanny.ru'
        },
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          applicableCountry: 'RU',
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: 14,
          returnMethod: 'https://schema.org/ReturnByMail',
          returnFees: 'https://schema.org/FreeReturn'
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressCountry: 'RU'
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 0,
              maxValue: 2,
              unitCode: 'DAY'
            },
            transitTime: {
              '@type': 'QuantitativeValue',
              minValue: 1,
              maxValue: 7,
              unitCode: 'DAY'
            }
          }
        }
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        reviewCount: '5000'
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Покупатель iDanny' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Быстрая доставка, возможность проверить устройство при получении и понятная консультация перед покупкой.'
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${productUrl}#breadcrumbs`,
      itemListElement: getBreadcrumbs(product).map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: `https://idanny.ru${item.href === '/' ? '' : item.href}` }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${productUrl}#faq`,
      mainEntity: getProductFaq(product).map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }))
    }
  ]

  return (
    <Layout>
      <Seo
        title={`Купить ${product.name}`}
        description={`Купить ${product.name} в iDanny. Оригинальная техника, гарантия, доставка по России и проверка при получении.`}
        canonical={`https://idanny.ru/product/${product.slug}`}
        jsonLd={jsonLd}
      />

      <section className="productPage">
        <div className="productGallery">
          <img src={product.img} alt={`${product.name} фото`} />
          <div className="trustMini">
            <span>Оригинал 100%</span>
            <span>Проверка при получении</span>
            <span>Доставка по РФ</span>
          </div>
        </div>

        <div className="productInfo">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            {getBreadcrumbs(product).map((item, index) => (
              <span key={item.href}>
                {index > 0 && ' / '}
                {index === getBreadcrumbs(product).length - 1 ? item.name : <Link href={item.href}>{item.name}</Link>}
              </span>
            ))}
          </nav>
          <span className="badge">{product.badge}</span>
          <h1>{buildCleanH1(product)}</h1>
          <p>{product.category === 'iPhone' ? normalizeSimLabel(product.sim) : `${product.model} · ${product.memory} · ${product.color} · ${product.sim}`}</p>
          <div className="price">{product.price}</div>

          <div className="configBox">
            <h3>Характеристики</h3>
            <dl>
              {getProductSpecs(product).map(([name, value]) => (
                <React.Fragment key={name}>
                  <dt>{name}</dt>
                  <dd>{value}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>

          <div className="ctaRow">
            <button className="btn">Купить сейчас</button>
            <button className="btn secondary">В корзину</button>
          </div>
        </div>
      </section>

      <section className="seoBlock">
        <h2>{product.name}: описание для SEO</h2>
        <p>{product.name} — коммерческая карточка товара iDanny с уникальным URL, SEO-title, meta description, schema.org Product, Offer и AggregateRating. На странице есть ключевые факторы доверия для Яндекса: доставка по всей России, проверка при получении, гарантия, наличие, отзывы и понятные характеристики.</p>
      </section>

      <section className="faqBlock">
        <h2>Вопросы о {buildCleanH1(product)}</h2>
        {getProductFaq(product).map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>


      <section className="relatedProducts">
        <span className="eyebrow">Связанные страницы</span>
        <h2>Продолжить выбор</h2>
        <div className="relatedGrid">
          {getRelatedLinks(product).map((link) => (
            <Link href={link.href} key={link.href}>{link.title}</Link>
          ))}
        </div>
      </section>
      <InternalLinks title="Другие категории" />

    </Layout>
  )
}