import React from 'react'
import './Tarea.css'
import Button from './Button.jsx'


function Tarea({ tareaX, onEliminarTarea, onMarcarCompletada }) { //recibe tarea e index
  return (
    <>  
      <div className="tarea">
        <p className={tareaX.completada ? 'completada' : 'pendiente'}>  {tareaX.texto} </p> 
        <p> creada: <span>{tareaX.creadaMomento}</span> </p> 
        {tareaX.completada && ( 
        <p>  completada: <span>{tareaX.completadaMomento}</span> </p>
        )} 
        <div className='botones'> 
        <Button texto="🗑️" type="button" className="u-full-width button-primary" onClick={onEliminarTarea} id =""/> 
        <Button texto="✔️" type="button" className="u-full-width button-primary" onClick={onMarcarCompletada} id =""/> 
        </div>
      </div>
    </>
  )
}


export default Tarea