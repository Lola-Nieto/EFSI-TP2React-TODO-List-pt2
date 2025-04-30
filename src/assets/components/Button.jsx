import React from 'react'
import './Button.css'

function Button(props) {
    return (
      <>
      <button className='acciones'><span> {props.texto}</span> </button >
      </>
    )
  }


export default Button


