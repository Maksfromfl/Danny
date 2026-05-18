import AdminLayout from '../../components/AdminLayout'

export default function AdminSettings() {
  return (
    <AdminLayout title="Настройки магазина">
      <section className="adminPanel">
        <h2>Правила iDanny</h2>
        <div className="adminGrid">
          <div><b>iPhone</b><p>Только линейка iPhone 17. Никаких iPhone 15/16.</p></div>
          <div><b>Кнопки</b><p>Только сине-фиолетовый градиент.</p></div>
          <div><b>Обещания</b><p>Без бесплатной доставки, trade-in, 24/7 и 14 дней возврата.</p></div>
          <div><b>Ray-Ban Meta</b><p>Отдельная категория в каталоге.</p></div>
        </div>
      </section>
    </AdminLayout>
  )
}