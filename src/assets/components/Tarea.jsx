import React from 'react'
import './Tarea.css'


function Tarea({props}) {

    return (
      <>
      <div className = "tarea" >

            <p className={props.estado ? "completada" : "pendiente"}> {props.textoTarea} (creada: {props.creadaMomento}) {props.estado && completadaMomento} </p>
            
           
            
      </div>

      </>
    )
  }


export default Tarea