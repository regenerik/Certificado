import React from 'react'
import style from "./style/Principal.module.css"
import { Link } from 'react-router-dom'
import Header from "../componentes/Header.js"



const Principal = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Header />
      </header>
      <nav className={style.navbar}>
        <ul className={style.listaBotones}>
          <Link to="/creando">
            <li className={style.links}>Crear ya</li>
          </Link>
          <li className={style.links}>Tutorial</li>
          <li className={style.links}>Quiero donar</li>
        </ul>
      </nav>
      <article className={style.content}>
        <h1>Contenido Principal</h1>
        <p>Que tal, acá va el contenido principal</p>
      </article>
      <aside className={style.sidebar}>
        <h2>Otros trabajos:</h2>
        <h3>Codebug</h3>
        <h3>Portfolio</h3>
        <h3>Canal "Te lo digo en código"</h3>
      </aside>
      <footer className={style.footer}>
        <h4>Contacto</h4>
        <h4>Acerca del creador</h4>
        <h4>Términos y condiciones</h4>
      </footer>
    </div>
  )
}

export default Principal