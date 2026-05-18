import AdminLayout from '../../components/AdminLayout'

const orders = [
  { id: 'ID-1001', customer: 'Новый покупатель', product: 'iPhone 17 Pro Max', status: 'Новая заявка', total: '179 990 ₽' },
  { id: 'ID-1002', customer: 'Покупатель из РФ', product: 'Ray-Ban Meta Wayfarer', status: 'Связаться', total: '69 990 ₽' }
]

export default function AdminOrders() {
  return (
    <AdminLayout title="Заказы">
      <section className="adminTable">
        <div className="adminTableHead">
          <span>№</span><span>Клиент</span><span>Товар</span><span>Статус</span><span>Сумма</span>
        </div>
        {orders.map(o => (
          <div className="adminRow" key={o.id}>
            <b>{o.id}</b><span>{o.customer}</span><span>{o.product}</span><span>{o.status}</span><b>{o.total}</b>
          </div>
        ))}
      </section>
    </AdminLayout>
  )
}