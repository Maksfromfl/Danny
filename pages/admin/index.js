import AdminLayout from '../../components/AdminLayout'
import products from '../../data/products.json'

export default function AdminDashboard() {
  return (
    <AdminLayout title="Панель управления">
      <section className="adminStats">
        <div><b>{products.length}</b><span>товаров в каталоге</span></div>
        <div><b>0</b><span>новых заказов</span></div>
        <div><b>SEO</b><span>schema / canonical / FAQ включены</span></div>
        <div><b>Market</b><span>отзывы Яндекс Маркета подключены</span></div>
      </section>

      <section className="adminPanel">
        <h2>Что можно делать</h2>
        <div className="adminGrid">
          <div><b>Товары</b><p>Менять цены, наличие, бейджи, SEO title/description.</p></div>
          <div><b>Заказы</b><p>Смотреть заявки покупателей и статусы обработки.</p></div>
          <div><b>Блог</b><p>Готовить статьи iDanny Journal для SEO.</p></div>
          <div><b>SEO</b><p>Контролировать URL, canonical, schema и sitemap.</p></div>
        </div>
      </section>
    </AdminLayout>
  )
}