import { createContext } from "react";
import useCart from "../hooks/useCart";

export const CartContext = createContext({});

export const CartProvider = ({children} : any) => {
  const {
    cartItems, 
    addToCart, 
    deleteItemFromCart, 
    addCount, 
    minusCount, 
    totalPrice, 
    totalAmount,
    countTotalPrice,
    countTotalAmount
  } = useCart()

  return (
    <CartContext
      value={{
        cartItems, 
        addToCart, 
        deleteItemFromCart, 
        addCount, 
        minusCount, 
        totalPrice, 
        totalAmount,
        countTotalPrice,
        countTotalAmount
      }}
    >
      {children}
    </CartContext>
  )
}
 