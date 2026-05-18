import AdminLayout from '../../components/AdminLayout'

export default function AdminSeo() {
  return (
    <AdminLayout title="SEO контроль">
      <section className="adminPanel">
        <h2>SEO checklist</h2>
        <div className="adminChecklist">
          <label><input type="checkbox" checked readOnly /> Unique URLs</label>
          <label><input type="checkbox" checked readOnly /> Unique title</label>
          <label><input type="checkbox" checked readOnly /> Meta descriptions</label>
          <label><input type="checkbox" checked readOnly /> H1 optimization</label>
          <label><input type="checkbox" checked readOnly /> Product schema</label>
          <label><input type="checkbox" checked readOnly /> Canonical</label>
          <label><input type="checkbox" checked readOnly /> Breadcrumbs</label>
          <label><input type="checkbox" checked readOnly /> FAQ schema</label>
        </div>
      </section>
    </AdminLayout>
  )
}