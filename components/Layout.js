import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <header className="topBar">
        <span>🚚 Доставка по всей России</span>
        <span>⭐ 4.9 на Яндекс.Маркете</span>
      </header>
      <header className="siteHeader">
        <Link href="/" className="brand"><span className="brandMark">D</span><span>iDanny</span></Link>
        <nav className="desktopNav">
          <Link href="/iphone">iPhone</Link>
          <Link href="/macbook">MacBook</Link>
          <Link href="/ipad">iPad</Link>
          <Link href="/meta-rayban">Meta × Ray-Ban</Link>
          <Link href="/journal/rayban-meta-gen1-vs-gen2">Journal</Link>
        </nav>
        <div className="headerActions"><button>🔍</button><button>🛒</button></div>
      </header>
      <main>{children}</main>
      <nav className="bottomNav">
        <Link href="/">🏠<span>Home</span></Link>
        <Link href="/iphone">📱<span>iPhone</span></Link>
        <Link href="/macbook">💻<span>Mac</span></Link>
        <Link href="/meta-rayban">🕶<span>Meta</span></Link>
        <Link href="/contacts">💬<span>Help</span></Link>
      </nav>
      <footer className="footer">
        <b>iDanny</b>
        <div><Link href="/delivery">Доставка</Link><Link href="/payment">Оплата</Link><Link href="/warranty">Гарантия</Link><Link href="/about">О компании</Link><Link href="/inspection">Проверка при получении</Link><Link href="/faq">FAQ</Link><Link href="/meta-rayban">Ray-Ban Meta</Link></div>
      </footer>
    </>
  )
}