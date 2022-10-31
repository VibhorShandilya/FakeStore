import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
import "./Slider.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';

export default (props) => {
  let image=props.images;
  return (
<>
<Swiper  
 
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
 
className="mySwiper">
        <SwiperSlide>
          <img src={image[0]} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide><img src={image[1]} alt="" srcSet="" /></SwiperSlide>

    
      </Swiper>
      

</>
  );
};