import React from 'react'
import style from "./style/Tutorial.module.css"
import { Link } from 'react-router-dom'
import Header from "../componentes/Header.js"
import Navbar from "../componentes/Navbar.js"
import Aside from "../componentes/Aside.js"
import Footer from "../componentes/Footer.js"

const Tutorial = () => {
  return (
    <div className={style.container}>
    <header className={style.header}>
      <Header />
    </header>
    <nav className={style.navbar}>
      <Navbar />
    </nav>
    <article className={style.content}>
      <h1>Tutorial</h1>
      <p>Bienvenido a el sitio más esperado por alguien que está sin mucho que hacer en casa!</p>
      <p>La función de esta web es armar un certificado con información aleatoria y fondos variados.</p>
      <p>Querés intentarlo? Dale click al botón!</p>
      <Link className={style.link} to="/creando">
        <h3 className={style.boton}>CREAR YA</h3>
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

export default Tutorial