import React from 'react'
import style from "./style/Principal.module.css"
import { Link } from 'react-router-dom'


const Principal = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>Bienvenido a "Tu Diploma!"</header>
      <nav className={style.navbar}>
        <ul>
          <Link to="/creando">
            <li>Crear ya</li>
          </Link>
          <li>Tutorial</li>
          <li>Quiero donar</li>
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