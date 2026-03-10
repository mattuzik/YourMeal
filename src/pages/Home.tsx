import Hero from "../components/Hero/Hero";
import Catalog from "../components/Catalog/Catalog";
import { CartContext } from "../context/CartContext";
import { useContext, useEffect } from "react";

const Main = () => {
  const { minusCount, addCount, addToCart, deleteItemFromCart, countTotalPrice, countTotalAmount, cartItems } : any = useContext(CartContext)

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
 
  useEffect(() => {
    countTotalPrice()
    countTotalAmount()
  }, [addToCart, addCount, minusCount, deleteItemFromCart])

  return (  
    <main>
      <Hero />
      <Catalog />
    </main>
  )
}
 
export default Main;