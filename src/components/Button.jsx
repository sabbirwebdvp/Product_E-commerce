import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-denger px-12 py-4 text-base text-primary font-medium font-pop rounded-sm hover:bg-yellow-50 hover:text-black ${className}`}>{text}</button>
 
  )
}

export default Button