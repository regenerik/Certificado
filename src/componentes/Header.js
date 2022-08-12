import React from 'react'
import certificado from "../img/certificado.png"
import style from "./style/Header.module.css"

const Header = () => {
  return (
    <div className={style.headerTotal}>
        <div className={style.headerTotalLogo}>
            <img className={style.imgHeader} src={certificado} alt="certificado"/>
            <h1 className={style.tituloHeader}>MI CERTIFICADO</h1>
        </div>
        <div className={style.textoHeader}>
            <h1>El sitio para crear tus propios certificados!</h1>
        </div>
    </div>
  )
}

export default Header