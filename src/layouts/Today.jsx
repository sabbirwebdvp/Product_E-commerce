import React from 'react'
import Conteinar from '../components/Containar'
import Hadding from '../components/Hadding'
import Card from '../components/Card'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import Image4 from '../assets/image4.png'
import Flex from '../components/Flex'
import Button from '../components/Button'

const Today = () => {
  return (
    <section className='mt-35'>
        <Conteinar>
            <Hadding tittle="Today’s" text="Flash Sales"/>
        <Flex className=" pt-10 gap-x-7.5">
         <Card image={Image1} titel="HAVIT HV-G92 Gamepad" sellprice="120" regularprice="160" badge="-40%"/>
        <Card image={Image2} titel="AK-900 Wired Keyboard" sellprice="960" regularprice="1160" badge="-35%"/>
        <Card image={Image3} titel="IPS LCD Gaming Monitor" sellprice="370" regularprice="400" badge="-30%"/>
        <Card image={Image4} titel="S-Series Comfort Chair " sellprice="375" regularprice="400" badge="-25%"/>
        </Flex>
        <div className='text-center my-15 '>
            <Button text=" View All Products"/>
        </div>
         <hr className='text-[#0000002d] mb-20'/>
        </Conteinar>
    </section>
  )
}

export default Today