import React from 'react'
import './Form.css'
import Button from './Button.jsx'


function Form() {

return (
    <>
        <h2>Crear mi Cita</h2>
        <form>
            <div id="divIngreso">
                <input type="text" placeholder="Ingresa tu tarea" id="ingresoUsuario" name="ingresoUsuario" />
                <Button texto="Agregar" id ="botonIngreso"/>           
            </div>
        </form>

    </>
  )

  
}

export default Form


