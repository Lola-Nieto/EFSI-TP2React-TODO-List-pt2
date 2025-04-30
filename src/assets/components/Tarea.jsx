import React from 'react'
import './Tarea.css'


function Tarea({tarea}) {
  let info;
  if (tarea.estado) {
    return
    <>
      <p className="completada"> <span>{tarea.textoTarea}</span>  </p>
      <p>  creada:<span>{tarea.creadaMomento}</span>  completada: <span>{tarea.completadaMomento}</span> </p> 
    </>
    info = 
  }else{
    return 
    <>
      <p className="pendiente"> <span>{tarea.textoTarea}</span>  </p>
      <p>  creada:<span>{tarea.creadaMomento}</span>   </p> 
    </>
  }
  }


export default Tarea