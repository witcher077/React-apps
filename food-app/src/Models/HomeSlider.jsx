import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../index.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomeSlider = ({items}) => {
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty('--progress', 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {items && items.map(ele => <SwiperSlide><div className='sliderImage' style={{ margin:"0 20px", height: "30vh",display:"flex",alignItems:"center",justifyContent:"center",gap:"40px" }}>
          <div style={{width:"50%",textAlign:"left"}} ><h1 style={{fontWeight:"bold"}}>{ele.title}</h1>
          <p>{ele.description}</p>
          <p className='ratings'>{ele.rating} 🌟</p>
          </div><img width="100" height="100" src={ele.images[0]} />
        </div></SwiperSlide>)}
        {/* <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div> */}
      </Swiper>
    </div>
  );
}


export default HomeSlider