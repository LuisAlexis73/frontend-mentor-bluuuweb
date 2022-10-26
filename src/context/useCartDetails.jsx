import { createContext, useState } from "react";

export const useCartDetails = createContext();

export default (props) => {

  const [cartProducts, setCartProducts] = useState([]);

  const addCartProducts = (product) => {

    if(cartProducts.length === 0){
      return setCartProducts([...cartProducts, product]);
    }
    setCartProducts(
      cartProducts.map(item => {
        if(item.id === product.id){
          return {...item, quantity: item.quantity + product.quantity}
        }else {
          return item
        }
      })
    )
  };

  const deleteCartProducts = (id) => {
    setCartProducts(cartProducts.filter(item => item.id !== id));
  };

  const totalQuantityProducts = cartProducts.reduce((acc, current) => current.quantity + acc, 0)

  return (
    <useCartDetails.Provider value={{ cartProducts, addCartProducts, deleteCartProducts, totalQuantityProducts }}>
      {props.children}
    </useCartDetails.Provider>
  );
};