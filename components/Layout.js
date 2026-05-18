import Link from 'next/link'
export default function Layout({ children }) {
  return <>
    <header className="siteHeader">
      <Link href="/" className="brand"><span className="brandMark">D</span><span>iDanny</span></Link>
      <nav className="desktopNav"><Link href="/iphone">iPhone</Link><Link href="/macbook">MacBook</Link><Link href="/ipad">iPad</Link><Link href="/meta-rayban">Meta × Ray-Ban</Link><Link href="/journal">Journal</Link></nav>
      <div className="headerActions"><button className="iconBtn">🔍</button><button className="iconBtn">🛒</button></div>
    </header>
    <main>{children}</main>
    <nav className="bottomNav"><Link href="/">🏠<span>Home</span></Link><Link href="/iphone">📱<span>iPhone</span></Link><Link href="/macbook">💻<span>Mac</span></Link><Link href="/meta-rayban">🕶<span>Meta</span></Link><Link href="/contacts">💬<span>Help</span></Link></nav>
    <footer className="footer"><div><div className="brand footerBrand"><span className="brandMark">D</span><span>iDanny</span></div><p>Premium Apple & future tech store. Доставка по всей России.</p></div><div className="footerLinks"><Link href="/delivery">Доставка</Link><Link href="/payment">Оплата</Link><Link href="/warranty">Гарантия</Link><Link href="/returns">Возврат</Link><Link href="/about">О компании</Link><Link href="/contacts">Контакты</Link></div></footer>
  </>
}
