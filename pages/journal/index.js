import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import Link from 'next/link'
const posts=[['how-to-choose-iphone-17','Как выбрать iPhone 17'],['iphone-17-pro-vs-pro-max','iPhone 17 Pro vs Pro Max'],['esim-vs-sim-esim','eSIM vs SIM+eSIM']]
export default function Journal(){return <Layout><Seo title="Journal | iDanny" description="Статьи iDanny о выборе техники" canonical="https://idanny.ru/journal"/><section className="commercialHero"><h1>Journal</h1><p>Полезные материалы о выборе техники.</p></section><section className="commercialGrid">{posts.map(([slug,title])=><article key={slug}><h2>{title}</h2><p>Короткий гид iDanny.</p><Link href={`/journal/${slug}`}>Читать</Link></article>)}</section></Layout>}
