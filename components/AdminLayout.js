import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const links = [
  ['Панель', '/admin'],
  ['Товары', '/admin/products'],
  ['Заказы', '/admin/orders'],
  ['Блог', '/admin/journal'],
  ['SEO', '/admin/seo'],
  ['Настройки', '/admin/settings']
]

export default function AdminLayout({ children, title = 'iDanny Admin' }) {
  const router = useRouter()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const logged = typeof window !== 'undefined' && localStorage.getItem('idanny_admin_session') === 'true'
    if (!logged && router.pathname !== '/admin/login') {
      router.replace('/admin/login')
    } else {
      setReady(true)
    }
  }, [router])

  const logout = () => {
    localStorage.removeItem('idanny_admin_session')
    router.replace('/admin/login')
  }

  if (!ready && router.pathname !== '/admin/login') return null

  return (
    <div className="adminShell">
      <aside className="adminSidebar">
        <Link href="/" className="adminBrand"><span className="brandMark">D</span><b>iDanny</b></Link>
        <nav>
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={router.pathname === href ? 'active' : ''}>{label}</Link>
          ))}
        </nav>
        <button className="adminGhost" onClick={logout}>Выйти</button>
      </aside>

      <section className="adminMain">
        <header className="adminTop">
          <div>
            <span className="eyebrow">Admin panel</span>
            <h1>{title}</h1>
          </div>
          <Link href="/" className="btn small">Открыть сайт</Link>
        </header>
        {children}
      </section>
    </div>
  )
}