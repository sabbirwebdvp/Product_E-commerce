import React from 'react'
import Conteinar from '../components/Containar'
import Flex from '../components/Flex'
import CategoryList from '../components/CategoryList'
import Image from '../components/Image'
import BannerImage from '../assets/marketing.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className='mt-10'> 
      <Conteinar>
        <Flex>
          <div className='w-3/12 relative after:w-0.5 after:h-100 after:absolute 
          after:-top-[16%] after:right-10 after:bg-[#0000002d] after:content-[""] '>
          <ul className='flex flex-col gap-y-4'>
          <CategoryList text="Woman’s Fashion" type="true"/>
          <CategoryList text="Men’s Fashion" type="true" classNameForIcon="ml-19"/>
          <CategoryList text="Electronics"/>
          <CategoryList text="Home & Lifestyle"/>
          <CategoryList text="Medicine"/>
          <CategoryList text="Sports & Outdoor"/>
          <CategoryList text="Baby’s & Toys"/>
          <CategoryList text="Groceries & Pets"/>
          <CategoryList text="Health & Beauty"/>
          </ul>
          </div>

          <div className='w-9/12'>
        <Slider {...settings}>
      <div>
        <Image src={BannerImage} alt="Image"/>
      </div>
      <div>
        <Image src={BannerImage} alt="Image"/>
      </div>
      <div>
        <Image src={BannerImage} alt="Image"/>
      </div>
      <div>
        <Image src={BannerImage} alt="Image"/>
      </div>
      <div>
        <Image src={BannerImage} alt="Image"/>
      </div>
      <div>
        <Image src={BannerImage} alt="Image"/>
      </div>
      
      
    </Slider>
         
          </div>
        </Flex>
      </Conteinar>
    </section>

    
  )
}

export default Banner