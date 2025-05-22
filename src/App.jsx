import './App.css'
import React, {useState, useEffect} from 'react';
import Form from './assets/components/Form'
import List from './assets/components/List'
import FilterButtons from './assets/components/FilterButtons'


function App() {

  const [lista, setLista] = useState([]);

//Cargo la lista de tareas
  useEffect(() => {
      let listaTareasJSON = localStorage.getItem("listaTareas");
      let listaTareas = JSON.parse(listaTareasJSON);

      //Creo una copia de la lista que incluya a esta y le agrego la neuva tarea
      const nuevaLista = [...lista, listaTareas];
      setLista(nuevaLista);
  }
  
}, []); //[] pq es únicamente al crear el componente


    // Actualizar localStorage cuando cambia lista
  useEffect(() => {
    localStorage.setItem("listaTareas", JSON.stringify(lista));//Reeemplazo lista q estaba antes en el LS
  }, [lista]); 

  const sacoDatosDelForm = (tarea) => {
    console.log("Lo que llega a App.js:", tarea);
    const nuevaLista = [...lista, tareaNueva]; //Agrego la tarea a lista
    setLista(nuevaLista);
  }

  return (
    <>
    
     <h1>📝 Lista de Tareas</h1>
     <Form onAgregarCita={sacoDatosDelForm}/>
     <List/>
     <FilterButtons/>
     
    </>
  )


export default App
