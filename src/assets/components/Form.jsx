import React from 'react'
import './Form.css'

function Form() {

return (
    <>
        <h2>Crear mi Cita</h2>
        <form>
            <div id="divIngreso">
                <input type="text" placeholder="Ingresa tu tarea" id="ingresoUsuario" name="ingresoUsuario" />
                <button type="submit" id="botonIngreso"> Añadir Tarea</button>
            </div>
        </form>

    </>
  )

  
}

export default Form


