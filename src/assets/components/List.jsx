import React from 'react'
import './List.css'
import Tarea from './Tarea.jsx'



function List() {

    return (
      <>
      
      <div id="mostrarLista">
        <ul id="UL">
           <li><Tarea textoTarea="Tarea filosofía" creadaMomento = "21/4/2025, 07:56:15" estado={true} completadaMomento="22/4/2025, 16:30:42" /></li>
           <li><Tarea textoTarea="Estudiar historia judía" creadaMomento = "20/4/2025, 08:21:15" estado={false}  /></li>
        </ul>
    </div>
      </>
    )
  }
  //https://react.dev/reference/react/useState 



export default List
