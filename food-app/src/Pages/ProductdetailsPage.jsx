import React, { useContext } from 'react';
import { useParams } from "react-router-dom"
import ProductsContext from '../Context/ProductsCtx';
import ImageSlider from './ImageSlider/imageSlider';
import Stars from './stars';


const ProductdetailsPage = () => {

    const { Id } = useParams();
    const products = useContext(ProductsContext);
    const AllProducts = products.products.products;

    if (AllProducts === undefined)
        return <h1>Loading...</h1>

    const item = AllProducts.filter((ele, i) => ele.sku === Id);
    // console.log(item);

    return (
        <div>
            <div className=' flex '>
                <div className='w-1/2'>
                    <ImageSlider items={item[0].images}/>
                    </div>
                <div className='w-1/2 pt-8'>
                    <div className='border-b-2 border-black pb-5'>
                        <h1 className=' text-blue-600 text-2xl font-bold'>{item[0].title}</h1>
                        <div>
                            <h2 className='font-semibold'>About this item</h2>
                            <Stars value={item[0].rating} />
                            <p>{item[0].description}</p>
                        </div>
                    </div>
                    <div className='py-2'>
                        <div className='flex gap-2'><span className='text-red-400'>-{Math.round(item[0].discountPercentage)}%</span><span className=' text-green-700 text-xl font-extrabold'>Rs. {Math.round(item[0].price * 80)}</span></div>
                        <h1 className=' text-gray-500 text-sm font-semibold line-through'>M.R.P.: {Math.round((item[0].price * 80) + (((item[0].price * 80) * item[0].discountPercentage) / 100))}</h1>
                        <p>{item[0].returnPolicy}</p>
                        <p>{item[0].shippingInformation}</p>
                        <p>Only {item[0].stock} item left</p>
                    </div>
                    <div>
                        {item[0].reviews.map((ele) => {
                            return (<>
                                <div className='flex items-center gap-3'>
                                    <p className=' flex w-10 h-10 rounded-full bg-slate-400 justify-center font-extrabold items-center'>{ele.reviewerName.charAt(0).toUpperCase()}</p>
                                    <p >
                                        <span className='font-bold text-blue-800' >{ele.reviewerName} </span>
                                        {ele.date}
                                    </p>
                                </div>
                                <Stars value={ele.rating} />
                                <p>{ele.comment}</p>
                            </>)
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductdetailsPage