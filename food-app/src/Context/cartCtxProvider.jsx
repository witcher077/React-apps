import React from "react";

const CartContext= React.createContext()

export default ProductsContext;

const CartCtxProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    return (
      <CartContext.Provider value={{ products }}>
        {children}
      </CartContext.Provider>
    )
  }

  export {CartCtxProvider}