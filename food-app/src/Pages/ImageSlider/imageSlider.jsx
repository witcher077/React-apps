import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function ImageSlider(props) {
    // console.log(props.items);

    if (props.items === undefined)
        return <h1>loading............</h1>


    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {props.items.map((ele, i) => { <SwiperSlide key={i}><img width='200' src={ele} /></SwiperSlide> })}

            </Swiper>
        </>
    );
}
