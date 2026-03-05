import React from 'react'
import Containar from '../components/Containar'
import Flex from '../components/Flex'
import Hadding from '../components/Hadding'
import Button from '../components/Button'
import Card from '../components/Card'
import Best1 from '../assets/best1.png'
import Best2 from '../assets/best2.png'
import Best3 from '../assets/best3.png'
import Best4 from '../assets/best4.png'


const BestProducts = () => {
  return (
    <section>
        <Containar>
            <Flex className='items-end justify-between '>
                <div> 
                <Hadding tittle="This Month" text="Best Selling Products"/>
            </div>
            <div><Button text="View all"/></div>
            </Flex>
            <Flex className='justify-between pt-15'>
                <Card image={Best1} titel="The north coat" sellprice="260" regularprice="360"/>
                 <Card image={Best2} titel="Gucci duffle bag" sellprice="960" regularprice="1160"/>
                  <Card image={Best3} titel="RGB liquid CPU Cooler" sellprice="160" regularprice="170"/>
                   <Card image={Best4} titel="Small BookSelf" sellprice="320" regularprice="380"/>
            </Flex>

        </Containar>
        
    </section>
  )
}

export default BestProducts