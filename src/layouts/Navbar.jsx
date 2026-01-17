import React from 'react'
import Conteinar from '../components/Containar'
import Flex from '../components/Flex'
import Logo from '../assets/logoimage.png'
import Image from '../components/Image'
import ListItem from '../components/ListItem'
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go"
import { GrCart } from "react-icons/gr";

const Navbar = () => {
  return (
   <nav className='pt-10 pb-4'>
        <Conteinar>
            <Flex>
                <div className='w-3/12'>
                <Image src={Logo}/>
                </div>
                <div className='w-5/12'>
                 <ul className='flex gap-x-12'>
                    <ListItem text="Home"/>
                    <ListItem text="Contuct"/>
                    <ListItem text="About"/>
                    <ListItem text="Sign Up"/>
                 </ul>
                </div>
                <div className='w-4/12 pl-10'>
                <Flex className="items-center justify-between">
                    <div className=' relative w-[243px] bg-[#F5F5F5]' >
               <input className='w-full py-1 pl-4 pr-7 placeholder:text-xs font-medium font-pop' type="text" placeholder='What are you looking for?'/>
                <IoSearchOutline className='absolute text-lg top-[9px] right-2' />
                
                </div>
                <GoHeart className='text-lg' />
                <GrCart  className='text-lg'/>
                </Flex>
                
                </div>
            </Flex>

        </Conteinar>

   </nav>
  )
}

export default Navbar