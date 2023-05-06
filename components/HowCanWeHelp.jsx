import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import SlImgSm1 from '../public/assets/sl-img-sm-1.png'
import SlImgSm2 from '../public/assets/sl-img-sm-2.png'
import SlImgSm3 from '../public/assets/sl-img-sm-3.png'
import SlImg1 from '../public/assets/sl-img-1.png'
import SlImg2 from '../public/assets/sl-img-2.png'
import SlImg3 from '../public/assets/sl-img-3.png'

import HowCanWeHelpSlider from "./HowCanWeHelpSlider";
import ProductsCarousel from "./ProductsCarousel";
import Card from "./Card";


const Main = () => {
  return (
    <div id="howcanwehelp" className="">
    <div className='md:hidden'>
      <div className=''>
      <Carousel
          autoPlay={true}
          showArrows={false}
          infiniteLoop={true}
          interval={5000}
          stopOnHover={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable={false}
        >
              <HowCanWeHelpSlider sliderImg={SlImgSm1} />  
              <HowCanWeHelpSlider sliderImg={SlImgSm2} />  
              <HowCanWeHelpSlider sliderImg={SlImgSm3} />  
            </Carousel>  
        </div>
        
      </div>
      <div className='hidden md:block sm:block'>
        <div className=''>
              <Carousel
                autoPlay
                infiniteLoop={true}
              >
                <HowCanWeHelpSlider sliderImg={SlImg1} />
                <HowCanWeHelpSlider sliderImg={SlImg2} />
                <HowCanWeHelpSlider sliderImg={SlImg3} />
                
              </Carousel>   
          </div>  
      </div>
                
    </div>
      
    
  );
};

export default Main