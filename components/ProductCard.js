import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <article className="productCard">
      <Link href={product.href} className="productImageWrap">
        <img src={product.img} alt={`${product.name} купить в iDanny`} />
        <span className="badge floating">{product.badge}</span>
      </Link>
      <div className="productBody">
        <span className="eyebrow">{product.category}</span>
        <h3><Link href={product.href}>{product.name}</Link></h3>
        <p>{product.model} · {product.memory} {product.color} {product.sim}</p>
        <div className="productMeta">
          <span>Оригинал</span><span>Гарантия</span><span>Доставка РФ</span>
        </div>
        <div className="productFooter">
          <strong>{product.price}</strong>
          <Link className="btn small" href={product.href}>Смотреть</Link>
        </div>
      </div>
    </article>
  )
}