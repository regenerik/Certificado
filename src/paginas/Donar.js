import React from 'react'
import style from "./style/Donar.module.css"
import { Link } from 'react-router-dom'
import Header from "../componentes/Header.js"
import Navbar from "../componentes/Navbar.js"
import Aside from "../componentes/Aside.js"
import Footer from "../componentes/Footer.js"

const Donar = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Header />
      </header>
      <nav className={style.navbar}>
        <Navbar />
      </nav>
      <article className={style.content}>
        <h1>Abriendo la billetera...</h1>
        <p>Bienvenido a el sitio más esperado por alguien que está sin mucho que hacer en casa!</p>
        <p>La función de esta web es armar un certificado con información aleatoria y fondos variados.</p>
        <p>Querés intentarlo? Dale click al botón!</p>
        <Link className={style.linkDonar} to="/donar">
          <h3 className={style.botonDonar}>DONAR</h3>
        </Link>
      </article>
      <aside className={style.sidebar}>
        <Aside />
      </aside>
      <footer className={style.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Donar