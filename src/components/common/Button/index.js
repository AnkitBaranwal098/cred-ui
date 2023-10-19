import React from 'react'
import "./button.css"
const Button = ({buttonText, onClickfn, customClass, prefix}) => {
  return (
    <div 
    className={`flex absolute-center button-wrapper ${customClass}`} 
    onClick={onClickfn}
    >
        {prefix} {buttonText}
    </div>
  )
}

export default Button