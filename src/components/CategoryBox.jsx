import React from 'react'


const CategoryBox = ({text,icon}) => {
  return (
    <div className='w-42.5 h-36.25 border border-[#0000002d] rounded-sm duration-500 flex flex-col items-center justify-center group hover:bg-denger hover:border-transparent'>
        <div className='text-4xl group-hover:text-white duration-300'>{icon}</div>
        <p className='text-base text-black font-normal font-pop pt-4  group-hover:text-white duration-300'>{text}</p>


    </div>
  )
}

export default CategoryBox