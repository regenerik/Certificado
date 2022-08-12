import React from 'react'
import style from "./style/Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className={style.listaBotones}>
          <Link className={style.sinSubrrayado} to="/">
            <li className={style.links}>Principal</li>
          </Link>
          <Link className={style.sinSubrrayado} to="/creando">
            <li className={style.links}>Crear ya</li>
          </Link>
          <Link className={style.sinSubrrayado} to="/tutorial">
            <li className={style.links}>Tutorial</li>
          </Link>
          <Link className={style.sinSubrrayado} to="/donar">
            <li className={style.links}>Quiero donar</li>
          </Link>
        </ul>
    </div>
  )
}

export default Navbar