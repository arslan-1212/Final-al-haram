import React from 'react'
import Swipper from '../Swipper/Swipper'
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation,Pagination} from "swiper"


function Cab_card() {
  return (
    <div className='container'>
        <div className='flight_main'>
        <div className="first">
        <div className="first_text ">
        <h4 className='hhh text-start '>BROWSE BY CABS</h4>
        <p className='flight_p text-start'>DISCOVER BEST THINGS TO DO RESTAURANTS,SHOPPING,HOTELS,CAFES AND PLACES</p>
        </div>

      <Swipper/>

        
        </div>

        <div className="second ">
        <h3 className='hhh text-start'> POPULAR DESTINATION</h3>
        <p className='flight_p text-start'>DISCOVER BEST THINGS TO DO RESTAURANTS,SHOPPING,HOTELS,CAFES AND PLACES</p>

        {/* <div className="swipppr">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='silde ms-4'><img src={makkah} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={madina} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={riyadh} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={makkah} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={madina} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={riyadh} alt="" /></SwiperSlide>
      </Swiper>
        </div>  */}
         <div className="swipppr mt-5">
        <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            300: {
                slidesPerView: 1,
                spaceBetween: 20,   
              },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 70,
              loop:true,
            },
          }}
          loop={true}
        modules={[Pagination]}
        className="mySwiper p-5"
      >
        <SwiperSlide className='silde'>
           <div>
        <img src="hram.png" className='img-fluid' alt="" />
            <figcaption className="fig_ham ">
            
            <b className='fs-3'>MAKKHA</b>  <br /> (123,4560)      

            </figcaption>
            </div>
        </SwiperSlide>
        <SwiperSlide className='silde'>
          <div>
        <img src="madina (2).png" className='img-fluid' alt="" />
            <figcaption className=" fig_ham ">

            <b className='fs-3'>MADINA</b>  <br /> (123,4560)      
            </figcaption>
            </div>
            </SwiperSlide>
        <SwiperSlide className='silde'>
          <div>
        <img src="t.png" className='img-fluid' alt="" />
            <figcaption className=" fig_ham">
                
            <b className='fs-3'>RIYADH</b>  <br /> (123,4560)              
                </figcaption>
                </div>

            </SwiperSlide>
            <SwiperSlide className='silde'>
              <div>
        <img src="hram.png" className='img-fluid' alt="" />
            <figcaption className=" fig_ham ">
            

            <b className='fs-3'>MAKKHA</b>  <br /> (123,4560)      

            </figcaption>
            </div>
        </SwiperSlide>
        <SwiperSlide className='silde'>
          <div>
        <img src="madina (2).png" className='img-fluid' alt="" />
            <figcaption className=" fig_ham ">

            <b className='fs-3'>MADINA</b>   <br /> (123,4560)      
            </figcaption>
            </div>
            </SwiperSlide>
       
            
      </Swiper>
        </div>
        </div>
    </div>
      
    </div>
  )
}

export default Cab_card
