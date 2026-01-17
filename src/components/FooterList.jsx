import React from 'react'

const FooterList = ({text, className}) => {
  return (
    <li className={`text-base text-[#FAFAFA] font-normal font-pop ${className}`}>{ text}</li>
  )
}

export default FooterList