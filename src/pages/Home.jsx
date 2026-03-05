import React from 'react'
import NewsPart from '../layouts/NewsPart'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Banner from '../layouts/Banner'
import Button from '../components/Button'
import Hadding from '../components/Hadding'
import Today from '../layouts/Today'
import Catagory from '../layouts/Catagory'
import BestProducts from '../layouts/BestProducts'
import Promoting from '../layouts/Promoting'
import ExploreProduct from '../layouts/ExploreProduct'



const Home = () => {
  return (
   <>
    <Banner/>
    <Today/>
    <Catagory/>
    <BestProducts/>
    <Promoting/>
    <ExploreProduct/>
    
  
   
   </>

        
  )
}

export default Home