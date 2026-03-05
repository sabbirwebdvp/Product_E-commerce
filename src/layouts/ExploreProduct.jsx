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
import Best5 from '../assets/best5.png'
import Best6 from '../assets/best6.png'
import Best7 from '../assets/best7.png'




const ExploreProduct = () => {
  return (
    <section>
         <Containar>
           
                <div> 
                <Hadding tittle="Our Products" text="Explore Our Products"/>
            </div>
        
            <Flex className='flex-wrap gap-7.5 py-15'>
                <Card image={Best1} titel="The north coat" sellprice="260" regularprice="360"/>
                <Card image={Best5} titel="The north coat" sellprice="260" regularprice="360"/>
                 <Card image={Best2} titel="Gucci duffle bag" sellprice="960" regularprice="1160"/>
                 <Card image={Best6} titel="Gucci duffle bag" sellprice="960" regularprice="1160"/>
                  <Card image={Best3} titel="RGB liquid CPU Cooler" sellprice="160" regularprice="170"/>
                  <Card image={Best7} titel="RGB liquid CPU Cooler" sellprice="160" regularprice="170"/>
                   <Card image={Best4} titel="Small BookSelf" sellprice="320" regularprice="380"/>
                   <Card image={Best3} titel="Small BookSelf" sellprice="320" regularprice="380"/>
        
            </Flex>
             <div className='text-center'><Button text="View all Products"/></div>

        </Containar>

    </section>
  )
}

export default ExploreProduct