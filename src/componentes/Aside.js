import React from 'react'
import style from "./style/Aside.module.css"

const Aside = () => {
  return (
    <div className={style.cajaAside}>
      <div>
        <h2>Otros trabajos:</h2> 
      </div>
      <div className={style.opcionesAside}>

            <a className={style.linkAside} href='https://codebug-ten.vercel.app' target="_blank">
              <h3>Codebug</h3>
            </a>
            <a className={style.linkAside} href='https://portfolio-david-cunha.netlify.app/' target="_blank">
              <h3>Portfolio</h3>
            </a>
            <a className={style.linkAside} href='https://www.youtube.com/telodigoencodigo' target="_blank">
              <h3>Canal "Te lo digo en código"</h3>
            </a>
      </div>
    </div>
  )
}

export default Aside