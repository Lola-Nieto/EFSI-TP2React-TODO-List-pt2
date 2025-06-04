import React from 'react'
import './Tarea.css'
import Button from './Button.jsx'


function Tarea({ tareaX, onEliminarTarea, onMarcarCompletada }) { //recibe tarea e index
  return (
    <>
      <div className="tarea">
      
        
      <p className={tareaX.completada ? 'completada' : 'pendiente'}>
       
      </p>
      
        <p>{tareaX.texto}</p>
        <p> creada: <span>{tareaX.creadaMomento}</span> </p>
        <p> {tareaX.completada && (
          <>  completada: <span>{tareaX.completadaMomento}</span> </>
        )} </p>
      
      <Button texto="🗑️" type="button" className="u-full-width button-primary" onClick={onEliminarTarea} id =""/> 
      <Button texto="✔️" type="button" className="u-full-width button-primary" onClick={onMarcarCompletada} id =""/> 

      </div>
    </>
  )
}


/*
return (
  <>
  {console.log('Lo que llega a cita:' + citaX)}
  <div className = "cita" >

   
  <p>Mascota: <span>{citaX.nombre}</span></p>
    <p>Dueño: <span>{citaX.propietario}</span></p>
    <p>Fecha: <span>{citaX.fecha}</span></p>
    <p>Hora: <span>{citaX.hora}</span></p>
    <p>Sintomas: <span>{citaX.sintomas}</span></p>
    <button className="eliminar" onClick={onEliminarCita}>Eliminar ×</button>
  </div>
  </>
)

*/


export default Tarea