import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
export default function Page() {
  return <Layout><Seo title="Контакты" description="Контакты iDanny." canonical="https://idanny.ru/contacts" />
    <section className="pageHero"><span className="badge">Trust page</span><h1>Контакты</h1><p>Страница доверия iDanny для покупателей и коммерческих факторов Яндекса. Перед запуском добавьте реальные реквизиты, контакты и юридические формулировки.</p></section>
  </Layout>
}