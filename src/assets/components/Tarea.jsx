import React from 'react'
import './Tarea.css'


function Tarea({ tarea }) {
  return (
    <>
      <div id="tarea">
      <p className={tarea.estado ? 'completada' : 'pendiente'}>
        <span>{tarea.textoTarea}</span>
      </p>
      <p>
        creada: <span>{tarea.creadaMomento}</span>
        {tarea.estado && (
          <>  completada: <span>{tarea.completadaMomento}</span> </>
        )}
      </p>
      </div>
    </>
  )
}




export default Tarea