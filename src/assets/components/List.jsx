import React from 'react'
import './List.css'
import Tarea from './Tarea.jsx'



function List() {

    return (
      <>
      
      <div id="mostrarLista">
        <ul id="UL">
          <li> <Tarea tarea = {{textoTarea : 'Tarea filosofía', creadaMomento : '21/4/2025, 07:56:15', completadaMomento : '22/4/2025, 16:30:42', estado : true }} /></li>
          <li> <Tarea tarea = {{textoTarea : 'Tarea fuentes', creadaMomento : '20/4/2025, 15:30:51', completadaMomento : '20/4/2025, 20:30:43', estado : true }} /> </li>
          <li> <Tarea tarea = {{textoTarea : 'Estudiar historia judía', creadaMomento : '20/4/2025, 08:21:15', estado : false }} /></li>

        </ul>
    </div>
      </>
    )
  }
  //https://react.dev/reference/react/useState 



export default List
