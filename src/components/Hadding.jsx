import React from 'react'

const Hadding = ({tittle,text,className}) => {
  return (
    <div>
        <div className='flex items-center gap-x-4'> 
            <div className='w-5 h-10 bg-denger rounded-sm '></div>
            <p className='text-base text-denger font-semibold font-pop '> {tittle} </p>
        </div>
        <h2 className={`text-4xl text-black font-semibold font-inter pt-6 ${className}`}> {text}</h2>



    </div>
  )
}

export default Hadding