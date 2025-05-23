import React from 'react'
import './Form.css'
import Button from './Button.jsx'


function Form() {
    const [formData, setFormData] = useState({
        texto: '',
        creadaMomento: '',
        completada: false,
        completadaMomento: "",
      });
    const [texto, setTexto] = useState("");
    const [creadaMomento, setCreadaMomento] = useState("");

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData, //sintaxis de propagación --> que solo se actualice el que se cambió (no todos los valores de c/input)
          [name]: value
        }));
        console.log(`campo que cambió: ${name} valor qeu se guardó: ${value}`); //Va a ser siempre el texto
    
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData[texto]) { //Si no tiene nada/es undefined/es null
            console.log('No hay texto ')
        }else{
              setFormData({
              ...formData, // Propaga todas las propiedades del objeto actual
              creadaMomento: new Date().toISOString()  // Actualiza solo la propiedad 'age'
            });
            onAgregarTarea(formData);
        }
        }
       
    
return (
    <>
        <h2>Crear mi Cita</h2>
        <form>
            <div id="divIngreso">
                <input type="text" placeholder="Ingresa tu tarea" id="ingresoUsuario" name="ingresoUsuario" onChenage={handleChange}/>
                <Button type="submit" className="u-full-width button-primary" onClick={handleSubmit} id ="botonIngreso"/>           
            </div>
        </form>

    </>
  )

  
}

export default Form

//Duda: cómo se haría para que solo se actualice el valor de texto cuando se envía hace click en el botón submit (si para que se guarde 
// con el onChange lo que hay que hacer es event.target.value --> tendría que hacer referencia a otreo componente distinto (el input para ingresar tarea) al 
// que se le aplica la función (fc onClick, que es el botón))?
