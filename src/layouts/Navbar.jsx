import React from 'react'
import Conteinar from '../components/Containar'
import Flex from '../components/Flex'
import Logo from '../assets/logoimage.png'
import Image from '../components/Image'
import ListItem from '../components/ListItem'
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go"
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom'

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
                    <Link to='home'> <ListItem text="Home"/></Link>
                    <Link to='product'><ListItem text="Product"/></Link>
                    <Link to='login'><ListItem text="Login"/></Link>
                    <Link to='signup'><ListItem text="Sign Up"/></Link>
                 </ul>
                </div>
                <div className='w-4/12 pl-10'>
                <Flex className="items-center justify-between">
                    <div className=' relative w-60.75 bg-common' >
               <input className='w-full py-1 pl-4 pr-7 placeholder:text-xs font-medium font-pop' type="text" placeholder='What are you looking for?'/>
                <IoSearchOutline className='absolute text-lg top-2 right-2' />
                
                </div>
                <GoHeart className='text-lg' />
                <GrCart  className='text-lg'/>
                </Flex>
                
                </div>
            </Flex>

        </Conteinar>
        <hr className='text-[#0000002d] mt-4'/>
    

   </nav>
  )
}

export default Navbar