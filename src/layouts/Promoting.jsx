import React from 'react'
import Containar from '../components/Containar'
import Image from '../components/Image'
import Pomoting from '../assets/pomoting.png'


const Promoting = () => {
  return (
    <section className='mt-35 mb-17.5'>
        <Containar>
            <Image src={Pomoting}/>

        </Containar>
    </section>
  )
}

export default Promoting