import React, {useState} from 'react';
import './Form.css'
import Button from './Button.jsx'


function Form(props) {
    const [formData, setFormData] = useState({
        texto: '',
        creadaMomento: '',
        completada: false,
        completadaMomento: "",
      });
   // const [texto, setTexto] = useState("");
   // const [creadaMomento, setCreadaMomento] = useState("");

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
        console.log('Entra al handleSubmit')
        console.log('formData[texto].trim()'+ formData.texto.trim())
        if (!formData.texto.trim()) { //Si no tiene nada/es undefined/es null
            console.log('No hay texto ')
        }else{
        console.log('TIene texto el formDaat')
              setFormData({
              ...formData, // Propaga todas las propiedades del objeto actual
              creadaMomento: new Date().toISOString()  // Actualiza solo la propiedad 'creadaMomento'
            });
            const tareaConFecha = {
              ...formData,
              creadaMomento: new Date().toISOString(),
            };
            console.log('formData.creadaMomento' + formData.creadaMomento)

            props.onAgregarTarea(tareaConFecha);
        }
        }
       
    
return (
    <>
        <h2>Crear mi Cita</h2>
        <form onSubmit={handleSubmit}>
            <div id="divIngreso">
                <input type="text" placeholder="Ingresa tu tarea" id="ingresoUsuario" name="texto" onChange={handleChange} value={formData.texto}/>
                <Button texto="Agregar ➕" type="submit" className="u-full-width button-primary" id ="botonIngreso"/>           
            </div>
        </form>

    </>
  )

  
}

export default Form

//Duda: cómo se haría para que solo se actualice el valor de texto cuando se envía hace click en el botón submit (si para que se guarde 
// con el onChange lo que hay que hacer es event.target.value --> tendría que hacer referencia a otreo componente distinto (el input para ingresar tarea) al 
// que se le aplica la función (fc onClick, que es el botón))?
