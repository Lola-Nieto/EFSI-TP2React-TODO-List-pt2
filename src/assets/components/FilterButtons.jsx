import React from 'react'
import './FilterButtons.css'
import Button from './Button.jsx'

function FilterButtons() {

    return (
      <>
      <div className = "filtros" >            
        <Button texto="Completada"/>
        <Button texto="Eliminar"/>
        <Button texto="Eliminar completadas"/>
      </div>

      </>
    )
  }


export default FilterButtons