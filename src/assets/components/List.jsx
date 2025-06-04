import React from 'react'
import './List.css'
import Tarea from './Tarea.jsx'



function List(props) {

    

  let lista = props.listaTareas;
  console.log("lista: "+lista)

  const eliminarTarea = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index); //función para que se cree una copia y esta sea la que se modifica
    props.onEliminarTarea(nuevaLista);
  };

  const marcarCompletada = (index) => {
    let tarea = lista[index]; //Guardo la tarea y la envío por parámetro
    props.onMarcarCompletada(tarea, index);
  };
  

    return (
      <>
      <div className = "lista-tareas">
        
          {lista
          .filter(tarea => {
            if (props.filtroTareas === "todas") return true;
            if (props.filtroTareas === "completadas") return tarea.completada;
            if (props.filtroTareas === "pendientes") return !tarea.completada;
            return true; // si el filtro no es ni "completadas" ni "pendientes", muestra todas
          })
          .map((tarea, index) => (
            <Tarea
              key={index}
              tareaX={tarea}
              onEliminarTarea={() => eliminarTarea(index)}
              onMarcarCompletada={() => marcarCompletada(index)}
            />
          ))}
            
          
      </div>
      </>
    )
  }
  //https://react.dev/reference/react/useState 



export default List
