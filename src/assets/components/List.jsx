import React from 'react'
import './List.css'
import Tarea from './Tarea.jsx'



function List(props) {

    

  let lista = props.listaCitas;
  console.log("lista: "+lista)

  const eliminarCita = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index); //función para que se cree una copia y esta sea la que se modifica
    props.onEliminarCita(nuevaLista);
  };
  

    return (
      <>
      <div className = "lista-tareas">
        
        {lista.length > 0 &&
          lista.map((tarea, index) => (
          <Tarea key={index} tareaX={tarea} onEliminarTarea={() => eliminarTarea(index)} onMarcarCompletada={() => marcarCompletada(index)}/> 
          ))
        }

            
          
      </div>
      </>
    )
  }
  //https://react.dev/reference/react/useState 



export default List
