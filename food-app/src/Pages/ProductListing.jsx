import React, { useContext } from 'react'
import ProductsContext from '../Context/ProductsCtx';
import { Link } from "react-router-dom"
import Stars from './stars';
import { useState } from 'react';

const ProductListing = () => {

  const products = useContext(ProductsContext);
  const AllProducts = products.products.products;
  const [cartItems, setCartItems] = useState([])

  if (AllProducts === undefined)
    return <h1>Loading...</h1>

  const addItem = (e) => {
    const clicked = AllProducts.filter((ele) => ele.sku === e)
    setCartItems((prev) => [...prev, clicked])
  }
  console.log(cartItems);


  return (
    <div className='product-container flex-wrap gap-2 p-2'>
      {
        AllProducts.map((ele, i) => {
          return <div key={i} className="card" style={{ backgroundColor: "rgb(241 245 249)" }}>
            <Link to={"/Pdetails/" + ele.sku}><div><img style={{ borderRadius: "10px" }} width="240px" height="100px" src={ele.thumbnail} /></div>
              <div className="details">
                <h5 className="tittle">{ele.title}</h5>
                <div className="price-and-rating"><h3>₹ {Math.round(ele.price * 80)} /-</h3><h5 className=''>{ele.rating} ⭐</h5></div>
                <p class="discription">{ele.description}</p>
              </div>
            </Link>
            <div className='w-full'><button className='w-full' onClick={() => addItem(ele.sku)} >Add to Cart</button></div>
          </div>
        })
      }
    </div>
  )
}


export default ProductListing;
