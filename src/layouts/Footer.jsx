import React from 'react'
import Conteinar from '../components/Containar'
import Flex from '../components/Flex'
import Logo from '../assets/logo2.png'
import Image from '../components/Image'
import FooterList from '../components/FooterList'
import { MdSend } from "react-icons/md";
import Qrcode from '../assets/qrcode.png'
import Playstore from '../assets/playstor.png'
import Apply from '../assets/apply.png'
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className='bg-black  pt-20 pb-15'>
        <Conteinar>
            <Flex className='gap-x-23'>
                <div className='w-3/12'>
                <Image src={Logo} alt="Logo Image"/>
                <h4 className='text-xl text-[#FAFAFA] font-normal font-pop pt-6 pb-6'>Subscribe</h4>
                <FooterList className='list-none pb-4' text="Get 10% off your first order"/>
               <div className=' relative w-[217px]' >
                <input className='w-full text-[#FAFAFA] py-3 pl-4 pr-7 border border-[#FAFAFA] placeholder:text-md font-medium font-pop' 
                type="text" placeholder='Enter your email ?'/>
                 <MdSend  className='text-[#FAFAFA] absolute text-lg top-3.5 right-2' />
                               
                 </div>  
                </div>
                <div className='w-2/12'>
                <strong className='text-xl text-[#FAFAFA] font-normal font-pop'>Support</strong>
                <ul>
                  <FooterList className="pt-6 pb-4" text='111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.'/>
                   <FooterList className="pb-4" text='exclusive@gmail.com'/>
                    <FooterList text='+88015-88888-9999'/>
                </ul>
                </div>
                <div className='w-2/12 '>
                <strong className='text-xl text-[#FAFAFA] font-normal font-pop pb-6 inline-block'>Account</strong>
                <ul className='flex flex-col gap-y-4 '>
                  <FooterList text='My Account'/>
                  <FooterList text='Login / Register'/>
                  <FooterList text='Cart'/>
                  <FooterList text='Wishlist'/>
                  <FooterList text='Shop'/>
                </ul>
                </div>
                <div className='w-2/12'>
                <strong className='text-xl text-[#FAFAFA] font-normal font-pop pb-6 inline-block'>Quick Link</strong>
                <ul className='flex flex-col gap-y-4 '>
                  <FooterList text='Privacy Policy'/>
                  <FooterList text='Terms Of Use'/>
                  <FooterList text='FAQ'/>
                  <FooterList text='Contact'/>
                </ul>
                </div>
                <div className='w-3/12'>
                <strong className='text-xl text-[#FAFAFA] font-normal font-pop pb-6 inline-block'>Download App</strong>
                <p className='text-xs text-[#FAFAFA] font-normal font-pop pb-2'>Save $3 with App New User Only</p>
                <Flex className='pb-6'> 
                  <Image src={Qrcode} alt='QRCode'/>
                  <div className='ml-2'>
                    <Image src={Playstore} alt='Playstor'/>
                    <Image src={Apply} alt='Apply'/>

                  </div>
                </Flex>
                <div className='flex gap-x-7 text-[#FAFAFA] text-lg font-semibold'>
                  <FaFacebookF />
                  <FiTwitter />
                  <FiInstagram />
                  <RiLinkedinLine />

                  </div>
                </div>
            </Flex>
        </Conteinar>




    </footer>
  )
}

export default Footer