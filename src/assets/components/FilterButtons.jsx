import React from 'react'
import './FilterButtons.css'
import Button from './Button.jsx'

function FilterButtons(props) {
 
  const handleChange = (event, texto) => {
    
        props.onFiltrarTareas(texto);
        }

    return (
      <>
      <div className ="filtros" >            
        <Button texto="Completadas" onClick={() => handleChange("completadas")}/>
        <Button texto="Pendientes" onClick={() => handleChange("pendientes")}/>
        <Button texto="Todas" onClick={() => handleChange("todas")}/>

      </div>

      </>
    )
  }


export default FilterButtons