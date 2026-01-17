import React from 'react'

const ListItem = ({text,className}) => {
  return (
    <li className={`text-base text-black font-normal font-pop hover:text-red-700 duration-300${className}`}>{text}</li>
    
   
  )
}

export default ListItem