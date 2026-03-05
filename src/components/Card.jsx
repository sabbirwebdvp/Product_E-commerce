import React from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import { FaRegHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa"; 

const Card = ({image,titel,sellprice,regularprice,badge,className}) => {
  return (
<div className={`w-67.5 group ${className}`}>
        <Flex className= " relative w-full h-62.5 bg-common justify-center items-center rounded-sm  overflow-hidden">
            <Image src={image} alt="Image1"/>
            <p className='absolute py-1 px-3  top-3 left-4 bg-[#DB4444] rounded-sm text-primary text-xs font-normal font-pop'>{badge}</p>
            <li className='absolute top-3 right-4 w-8.5 h-8.5 bg-white text-xl font-semibold rounded-full flex justify-center items-center'><FaRegHeart /></li>
            <li className='absolute top-15 right-4 w-8.5 h-8.5 bg-white text-xl font-semibold rounded-full flex items-center justify-center'> <FiEye /> </li>
            <div className='absolute -bottom-10 group-hover:bottom-0 left-0 duration-500 bg-black py-2 w-full text-center rounded-b-sm cursor-pointer'>
                <p className='text-base text-white font-normal font-pop '>Add To Cart</p>
            </div>

        </Flex>
        <div>
            <h4 className='text-base text-black font-normal font-pop pt-4 pb-2'>{titel}</h4>
            <p className='text-base text-[#DB4444] font-normal font-pop '> ${sellprice} <span className='text-[#00000080]'><del className='text-[#00000080] pl-1'>${regularprice}</del>
            </span></p>
            <Flex className='items-center pt-2 gap-x-2'>
                <ul className='flex gap-x-1  !p-0 '>
                <li className='text-[#FFAD33] text-sm'><FaStar /></li>
                <li className='text-[#FFAD33] text-sm'><FaStar /></li>
                <li className='text-[#FFAD33] text-sm'><FaStar /></li>
                <li className='text-[#FFAD33] text-sm'><FaStar /></li>
                <li className=' text-sm'><FaStar /></li>
            </ul>
            <p>(88)</p>
            </Flex>

        </div>

    </div>
  )
}

export default Card