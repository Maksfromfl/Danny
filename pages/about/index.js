import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
export default function Page() {
  return <Layout><Seo title="О компании" description="О компании iDanny." canonical="https://idanny.ru/about" />
    <section className="pageHero"><span className="badge">Trust page</span><h1>О компании</h1><p>Страница доверия iDanny для покупателей и коммерческих факторов Яндекса. Перед запуском добавьте реальные реквизиты, контакты и юридические формулировки.</p></section>
  </Layout>
}