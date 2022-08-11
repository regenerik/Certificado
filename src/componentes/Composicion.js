import React from 'react'
import style from "./style/Composicion.module.css"
import background1 from "../img/background1.jpg"
import background2 from "../img/background2.jpg"
import background3 from "../img/background3.jpg"
import background4 from "../img/background4.jpg"
import background6 from "../img/background6.jpg"

const Composicion = ({uploaded, back, tipo, texto, titulo, nombre, instituto, fecha, ciudad, pais, responsable}) => {

  const renderSwitch = (back) => {
    
    switch(back){
      case "1":
        return background1;
      case "2":
        return background2;
      case "3":
        return background3;
      case "4":
        return background4;
      case "5":
        return URL.createObjectURL(uploaded);
      case "6":
        return background6;
      default:
        return background1;
    }

  }


  return (

    <div className={style.composicionTotal} id="Composicion">
        <div className={style.topCertificado}>
          <h1 className={style.tipo}>{tipo}</h1>
          <h6 className={style.texto}>{texto}</h6>
          <h1 className={style.nombre}>{nombre}</h1>
          <h6 className={style.titulo}>{titulo}</h6>
          <h6 className={style.instituto}>{instituto}</h6>
        </div>
        <div className={style.footerCertificado}>
          <div className={style.ciudadPaisFecha}>
            <h6 className={style.ciudad}>{ciudad} - {pais}</h6>
            <h6 className={style.fecha}>{fecha}</h6>

          </div>
          <div className={style.responsable}>
            <h6 className={style.responsable2}>{responsable}</h6>
          </div>
        </div>
        <img className={style.background1} src={[renderSwitch(back)]} alt="fondo1"></img>


    </div>
  )
}

export default Composicion