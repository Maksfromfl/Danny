import Link from 'next/link'
import OptimizedImage from './OptimizedImage'
export default function ProductCard({ product }) {
  return <article className="productCard"><div className="productImageWrap"><img src={product.image} alt={product.name}/>{product.badge && <span className="badge floating">{product.badge}</span>}</div><div className="productBody"><div className="eyebrow">{product.category}</div><h3>{product.name}</h3><p>{product.description}</p><div className="chips">{product.options?.slice(0,4).map(o=><span key={o}>{o}</span>)}</div><div className="productFooter"><strong>{product.price}</strong><Link href={product.href || '#'} className="btn small">Смотреть</Link></div></div></article>
}
