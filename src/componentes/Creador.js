import React from 'react'
import Composicion from "./Composicion.js"
import style from "./style/Creador.module.css"
//cosas de pdf:
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Creador = ({uploaded, back, tipo, texto, titulo, nombre, instituto, fecha, ciudad, pais, responsable}) => {

  // --------cosas pdf------------
  const  exportPDF = () =>{

    const input = document.getElementById("Composicion")
    html2canvas(input,{logging: true, letterRendering: 1, useCORS: true}).then(canvas =>{
            const imgWidth = 208;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const imgData = canvas.toDataURL("img/png");
            // const pdf = new jsPDF("l","mm","a5");
            const pdf = new jsPDF("l","mm",[145,208]);
            pdf.addImage(imgData, "PNG",0,0,imgWidth,imgHeight)
            pdf.save("nombreDelPdf.pdf")
        })

  }
  // -----------------------------


  return (
    <div className={style.diplomaYboton}>
        <Composicion uploaded={uploaded} back={back} tipo={tipo} texto={texto} titulo={titulo} nombre={nombre} instituto={instituto} fecha={fecha} ciudad={ciudad} pais={pais} responsable={responsable}/>
        <button onClick={()=> exportPDF()}>Descargalo</button>
    </div>
  )
}

export default Creador