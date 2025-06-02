import './App.css'
import React, {useState, useEffect} from 'react';
import Form from './assets/components/Form'
import List from './assets/components/List'
import FilterButtons from './assets/components/FilterButtons'
import Button from './assets/components/Button'


function App() {

  const [lista, setLista] = useState([]);
    const [filtro, setFiltro] = useState("todas");


//Cargo la lista de tareas
  useEffect(() => {
    const listaTareasJSON = localStorage.getItem("listaTareas");
    const listaTareas = listaTareasJSON ? JSON.parse(listaTareasJSON) : [];
    setLista(listaTareas);
    console.log('listaTareas al cargarse: ', listaTareas);
  }
  
, []); //[] pq es únicamente al crear el componente


    // Actualizar localStorage cuando cambia lista
  useEffect(() => {
    localStorage.setItem("listaTareas", JSON.stringify(lista));//Reeemplazo lista q estaba antes en el LS

  }, [lista]); 

  const sacoDatosDelForm = (tarea) => {
    console.log("Lo que llega a App.js: ", tarea.texto, tarea.creadaMomento);
    const nuevaLista = [...lista, tarea]; //Agrego la tarea a lista
    setLista(nuevaLista);
  }
  const reemplazarLista = (nuevaLista) => {
    setLista(nuevaLista);
  }
const actualizarTarea = (tarea, index) => {
    tarea.completada = true; //Modifico el estado de la tarea --> Necesito guardarla en una nueva variable para q se modifique? 
    const nuevaLista = lista.map((item, i) => (i === index ? tarea : item)); // Crea una nueva lista con el elemento modificado
    setLista(nuevaLista);

  }
  const cambiarFiltro = (filtro) => {
    setFiltro(filtro);
  }
  const eliminarCompletadas = () => {
    
          const nuevaLista = lista.filter(tarea => !tarea.completada); //Que se guarden las tareas NO completadas
          setLista(nuevaLista);
  }
  return (
    <>
     <FilterButtons onFiltrarTareas={cambiarFiltro}/>
     <h1>📝 Lista de Tareas</h1>
     <Form onAgregarTarea={sacoDatosDelForm}/>
     <List listaTareas={lista} filtroTareas={filtro} onEliminarTarea={reemplazarLista} onMarcarCompletada={actualizarTarea}/>
     <Button texto="Eliminar todas las completadas" onClick={eliminarCompletadas}/>

     
    </>
  )
}

export default App

