import React from 'react'
import Container from '../components/Containar'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import Language from '../components/Language'

const NewsPart = () => {
  return (
    <section className='bg-black p-3 '>
      <Container>
        <Flex className='justify-between'>
          <Flex className='pl-[300px]'>
          <p className='text-sm text-[#FAFAFA] font-normal font-pop '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
            <Link to='/janina' ><span className=' ml-3 font-semibold'><u>ShopNow</u></span></Link></p>
        </Flex>
          <Language/>
        </Flex>
      

      </Container>
    
    </section>
  )
}

export default NewsPart