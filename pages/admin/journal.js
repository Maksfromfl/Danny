import AdminLayout from '../../components/AdminLayout'

export default function AdminJournal() {
  return (
    <AdminLayout title="iDanny Journal">
      <section className="adminPanel">
        <h2>Статьи</h2>
        <div className="adminGrid">
          <div><b>Ray-Ban Meta Gen 1 vs Gen 2</b><p>Опубликовано / SEO comparison</p></div>
          <div><b>iPhone 17 Pro vs Pro Max</b><p>Запланировать</p></div>
          <div><b>SIM + eSIM vs eSIM + eSIM</b><p>Запланировать</p></div>
        </div>
      </section>
    </AdminLayout>
  )
}