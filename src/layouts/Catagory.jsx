import React from 'react'
import Conteinar from '../components/Containar'
import Hadding from '../components/Hadding'
import CategoryBox from '../components/CategoryBox'
import { SlScreenSmartphone } from "react-icons/sl";
import Flex from '../components/Flex'
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { LuHeadphones } from "react-icons/lu";
import { TbDeviceGamepad } from "react-icons/tb";






const Catagory = () => {
    return (
        <section>
            <Conteinar>
                <Hadding tittle="Categories" text="Browse By Category" />

                <Flex className='justify-between pt-15 pb-17.5'>
                    <CategoryBox text="Phones" icon={<SlScreenSmartphone /> } />
                    <CategoryBox text="Computers" icon={<RiComputerLine />} />
                    <CategoryBox text="SmartWatch" icon={ <BsSmartwatch />} />
                    <CategoryBox text="Camera" icon={ <IoCameraOutline />} />
                    <CategoryBox text="HeadPhones" icon={<LuHeadphones />} />
                    <CategoryBox text="Gaming" icon={ <TbDeviceGamepad />} />
                </Flex>
                <hr className='text-[#0000002d] pb-17.5' />


            </Conteinar>
        </section>
    )
}

export default Catagory