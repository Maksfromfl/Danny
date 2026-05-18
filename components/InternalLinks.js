import Link from 'next/link'

export const catalogLinks = [
  { title: 'iPhone 17', href: '/iphone', text: 'Актуальная линейка iPhone 17' },
  { title: 'MacBook', href: '/macbook', text: 'Ноутбуки для работы и задач Pro' },
  { title: 'iPad', href: '/ipad', text: 'Планшеты для учебы, работы и творчества' },
  { title: 'Ray-Ban Meta', href: '/meta-rayban', text: 'Умные очки Meta × Ray-Ban' }
]

export const trustLinks = [
  { title: 'О компании', href: '/about' },
  { title: 'Доставка', href: '/delivery' },
  { title: 'Гарантия', href: '/warranty' },
  { title: 'Оплата', href: '/payment' },
  { title: 'Проверка при получении', href: '/inspection' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Контакты', href: '/contacts' }
]

export default function InternalLinks({ title = 'Полезные разделы iDanny', type = 'catalog' }) {
  const links = type === 'trust' ? trustLinks : catalogLinks
  return (
    <section className="internalLinks">
      <div className="sectionHead compact">
        <div>
          <span className="eyebrow">iDanny navigation</span>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="internalLinkGrid">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <b>{link.title}</b>
            {link.text && <span>{link.text}</span>}
          </Link>
        ))}
      </div>
    </section>
  )
}
