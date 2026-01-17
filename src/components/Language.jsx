import React from 'react'
import Flex from '../components/Flex'
import { IoIosArrowDown } from "react-icons/io";

const Language = () => {
  return (
   <Flex>
    <button className='text-sm text-[#FAFAFA] font-normal font-pop'>English</button>
    <IoIosArrowDown className='text-[#FAFAFA]'/>
   </Flex>
  )
}

export default Language