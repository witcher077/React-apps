import React, { useState, useEffect } from "react";
import ProductsContext from "./ProductsCtx";

const ProductCtxProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const GetData = async () => {
        const url = "https://dummyjson.com/products"
        let res = await fetch(url);
        let data = await res.json()
        setProducts(data);
    }

    useEffect(() => {
        GetData();
    }, [])
    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductCtxProvider;