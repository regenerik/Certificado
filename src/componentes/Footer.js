import React from 'react'
import style from "./style/Footer.module.css"

const Footer = () => {
  return (
    <div className={style.footer}>
        <div>
            <h4>Contacto</h4>
        </div>
        <div>
            <h4>Creador</h4> 
        </div>
        <div>
            <h4>T&Condiciones</h4>
        </div>
    </div>
  )
}

export default Footer