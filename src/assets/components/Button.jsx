import React from 'react'
import './Button.css'

function Button({texto, ...props}) {
    return (
      <>
      <button {...props} className='acciones'><span> {texto}</span> </button >
      </>
    )
  }


export default Button


