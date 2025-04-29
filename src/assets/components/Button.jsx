import React from 'react'
import './Button.css'

function Button({props}) {

    return (
      <>
      <button className='acciones'> {props.texto} </button >
      </>
    )
  }


export default Button


