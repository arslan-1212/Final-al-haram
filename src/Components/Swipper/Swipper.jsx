import React from 'react'
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation,Pagination} from "swiper"



function Swipper() {
  return (
    <div>
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
        className="mySwiperham p-5"
      >
        <SwiperSlide className='silde'>
          <div>
        <img src="one.png" className='img-fluid' alt="" />
            <figcaption className=" ">
            
            <b>HATCH BACK</b>

            </figcaption>
            </div>
        </SwiperSlide>
        <SwiperSlide className='silde'>
             <div>        <img src="two.png" className='img-fluid' alt="" />
            <figcaption className=" ">

            <b>SEDAN</b>
            </figcaption>
            </div>

            </SwiperSlide>
        <SwiperSlide className='silde'>
          <div>
        <img src="four.png" className='img-fluid' alt="" />
            <figcaption className="">
                
            <b>SUV</b>                
                </figcaption>

                </div>
            </SwiperSlide>
            <SwiperSlide className='silde'>
              <div>
        <img src="two.png" alt="" className='img-fluid' />
            <figcaption className=" ">
            <b>HATCH BACK</b>
                
                </figcaption>
                </div>
            </SwiperSlide>
        <SwiperSlide className='silde'>
          <div>
        <img src="four.png" className='img-fluid'    alt="" />
            <figcaption className=" ">   <b>SEDAN</b></figcaption></div>
            </SwiperSlide>
       
            
      </Swiper>
        </div>





    </div>
  )
}

export default Swipper
