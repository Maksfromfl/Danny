import Link from 'next/link'
export default function ProductCard({p}){return <Link href={`/product/${p.slug}`} className="productCard"><div className="productMock">{p.emoji}</div><span>{p.category}</span><h3>{p.name}</h3><p>{p.desc}</p><b>{p.price}</b><button>Подробнее</button></Link>}
