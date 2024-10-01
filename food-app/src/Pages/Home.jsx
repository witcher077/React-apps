import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import ApiCalls from '../API/ApiCalls';
import ProductsContext from '../Context/ProductsCtx';
import HomeSlider from '../Models/HomeSlider';
import loader from "../Assets/loader.gif";

const Home = () => {
  const { products } = useContext(ProductsContext);

  const items = products.products;

  if (items == undefined) {
    return <img src={loader} />

  }
  
  const slideItems = items.filter(ele => ele.category === "groceries" && ele.rating > 4);




  return (
    <div className='home-Container relative'>
      <div className='slider-container'>
        <HomeSlider items={slideItems} />
      </div>

      <div className=' flex justify-between items-center bg-[#FE5005] py-2' >
        <div>
          <img src='https://www.swiggy.com/about-us/wp-content/uploads/2024/04/DE-on-bike-2-2.png' />
        </div>
        <div>
          <h1 className=' text-center text-blue-500 font-extrabold text-3xl'>Get your Requirments at your DoorStep in 20 Min*...</h1>
          <p className=' text-center text-xl text-blue-300'>This is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</p>
        </div>
        <div>
          <img src='https://www.swiggy.com/about-us/wp-content/uploads/2024/04/03-Instamart_3_front_view_2_skycolour.png' />
        </div>
      </div>
    </div>
  )
}

export default Home;