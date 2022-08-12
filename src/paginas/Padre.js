import React from 'react'
import style from "./style/Padre.module.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from "../componentes/Header.js"
import Creador from "../componentes/Creador.js"
import miniBackground1 from "../img/miniBackground1.jpg"
import miniBackground2 from "../img/miniBackground2.jpg"
import miniBackground3 from "../img/miniBackground3.jpg"
import miniBackground4 from "../img/miniBackground4.jpg"
import miniBackground6 from "../img/miniBackground6.jpg"
import Navbar from "../componentes/Navbar.js"
import Aside from "../componentes/Aside.js"
import Footer from "../componentes/Footer.js"


const Padre = () => {

    // ---------upload image-----------
    const [selectedImage, setSelectedImage] = useState(null);

  


    // --------------------------------

  const [ datos , setDatos ] = useState({
    tipo:"Certificado",
    texto:"Este documento respalda que el alumno:",
    titulo:"completó el curso de armado de barquitos de papel.",
    nombre:"David Ezequiel Cunha Quinteros",
    instituto:"Instituto Inventado",
    fecha:"10/10/2022",
    ciudad:"Bs.As.",
    pais:"Argentina",
    responsable:"Sr. Dueño"
  })

  const [back , setBack ] = useState("1")

  const handleImage = (e) => {
    let valor = e.target.name
    setBack(valor)
  }

  const handleChange = (e)=>{
    let valor = e.target.value
    let corresponde = e.target.name
    setDatos({
      ...datos,
      [corresponde]:valor})
  }

  const hanlderRemove = () =>{
    setBack("1")
    setSelectedImage(null);
  }

  return (
    <div className={style.container}>
      <header className={style.header}>
        <Header />
      </header>
      <nav className={style.navbar}>
        <Navbar />
      </nav>
      <article className={style.content}>


          <div className={style.posicion}>

                <h1>Area de Creación</h1>
                <p>Antes que nada llená los campos:</p>
                {/* --------------Area de creación------------------------- */}
              
              <div className={style.formulario}>
                <div>
                  <label>Tipo de documento:</label>
                    <div>
                      <input type="text" onChange={(e)=>handleChange(e)} value={datos.tipo} placeholder="ej:Certificado" name="tipo"/>
                    </div>
                  <label>Texto:</label>
                    <div>
                      <input type="text" onChange={(e)=>handleChange(e)} value={datos.texto} placeholder="ej:`Mediante este docuemento certificamos que X completó el curso de X" name="texto"/>
                    </div>
                  <label>Nombre:</label>
                    <div>
                      <input type="text" onChange={(e)=>handleChange(e)} value={datos.nombre} placeholder="ej:Pedro Perez" name="nombre"/>
                    </div>
                  <label>Título:</label>
                    <div>
                      <input type="text" onChange={(e)=>handleChange(e)} value={datos.titulo} placeholder="ej:Maquinista Profesional" name="titulo"/>
                    </div>
                  <label>Instituto:</label>
                    <div>
                      <input type="text" onChange={(e)=>handleChange(e)} value={datos.instituto} placeholder="ej:Universidad Nacional" name="instituto"/>
                    </div>
                </div>

                <div>
                  <label>Fecha:</label>
                    <div>
                      <input type="text" onChange={(e)=>handleChange(e)} value={datos.fecha} placeholder="ej:10/10/2020" name="fecha"/>
                    </div>
                  <label>Ciudad:</label>
                    <div>
                      <input type="text" onChange={(e)=>handleChange(e)} value={datos.ciudad} placeholder="ej:Buenos Aires" name="ciudad"/>
                    </div>
                  <label>País:</label>
                    <div>
                      <input type="text" onChange={(e)=>handleChange(e)} value={datos.pais} placeholder="ej:Argentina" name="pais"/>
                    </div>
                  <label>Responsable:</label>
                    <div>
                      <input type="text" onChange={(e)=>handleChange(e)} value={datos.responsable} placeholder="ej: Director Perez" name="responsable"/>
                    </div>
                  <label>Subir fondo personalizado:</label>
                    <div>
                      <input type="file" name="myImage" onChange={(event) => { console.log(event.target.files[0]); setSelectedImage(event.target.files[0]); }}/>
                    </div>
                </div>
                

              </div>

              {selectedImage && (
                <div>
                  <img className={style.propiaImagen} alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                <br />
                <button onClick={()=>hanlderRemove()}>Remove</button>
                </div>
                )}

                  <h3>Tocá la imagen que te guste:</h3>


          </div>

          <div className={style.imagenesMini}>
            { selectedImage ? (
              <img onClick={(e)=>handleImage(e)} name="5" className={style.miniBackground} src={URL.createObjectURL(selectedImage)} alt="not fount" />
            ):  (
              <img onClick={(e)=>handleImage(e)} name="6" className={style.miniBackground} src={miniBackground6} alt="mini-imagen6"/>
            )}
            <img onClick={(e)=>handleImage(e)} name="1" className={style.miniBackground} src={miniBackground1} alt="mini-imagen1"/>
            <img onClick={(e)=>handleImage(e)} name="2" className={style.miniBackground} src={miniBackground2} alt="mini-imagen2"/>
            <img onClick={(e)=>handleImage(e)} name="3" className={style.miniBackground} src={miniBackground3} alt="mini-imagen3"/>
            <img onClick={(e)=>handleImage(e)} name="4" className={style.miniBackground} src={miniBackground4} alt="mini-imagen4"/>
          </div>



        <Creador uploaded={selectedImage} back={back} tipo={datos.tipo} texto={datos.texto} titulo={datos.titulo} nombre={datos.nombre} instituto={datos.instituto} fecha={datos.fecha} ciudad={datos.ciudad} pais={datos.pais} responsable={datos.responsable}/>

{/* ------------------------------------------------------- */}
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

export default Padre