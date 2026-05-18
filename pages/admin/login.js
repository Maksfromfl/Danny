import { useState } from 'react'
import { useRouter } from 'next/router'
import Seo from '../../components/Seo'

export default function Login() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const demoPassword = process.env.NEXT_PUBLIC_ADMIN_DEMO_PASSWORD || 'idanny-admin'
    if (password === demoPassword) {
      localStorage.setItem('idanny_admin_session', 'true')
      router.push('/admin')
    } else {
      setError('Неверный пароль')
    }
  }

  return (
    <>
      <Seo title="Admin Login" description="Вход в админ-панель iDanny" canonical="https://idanny.ru/admin/login" />
      <main className="loginPage">
        <form className="loginCard" onSubmit={submit}>
          <div className="brand loginBrand"><span className="brandMark">D</span><span>iDanny Admin</span></div>
          <h1>Вход в админку</h1>
          <p>Демо-пароль: <b>idanny-admin</b>. В production нужно заменить на нормальную авторизацию.</p>
          <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
          {error && <span className="adminError">{error}</span>}
          <button className="btn" type="submit">Войти</button>
        </form>
      </main>
    </>
  )
}