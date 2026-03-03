import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Delivery from './components/Modals/Delivery'
import CardModal from './components/Modals/CardModal'
import { createContext, useEffect, useState } from 'react'

interface CartContext {
  addToCart: any,
  cartItems: any, 
  setCartItems: any
}

export const CategoryContext = createContext({})
export const CardContext = createContext({});
export const CartContext = createContext({});


function App() {
  // states
  const [currentCategory, setCurrentCategory] = useState(0)
  const [cartItems, setCartItems] = useState([] as string[])
  
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  const [isDeliveryModalOpen, setDeliveryModalOpen] = useState(false)

  const [isCardModalOpen, setCardModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Functions

  const addToCart = (item: any, addingCount: any) => {
    const foundItem = cartItems.find((obj: any) => obj.id == item.id)
    console.log(typeof addingCount)

    !foundItem ? item.count = addingCount : null
    foundItem ? addCount(item.id, addingCount) : setCartItems([...cartItems, item])
  }

  const deleteItemFromCart = (item: any) => {
    const findDelete = cartItems.filter((obj: any) => obj.id !== item.id)
    setCartItems(findDelete)    
  }

  const addCount = (id: number, addingCount: number) => {
    const foundThisCard = cartItems.map((item: any) => {
      if (item.id == id) {
        if (addingCount) {
          return {
            ...item,
            count: item.count += addingCount
          }
        }
        return {
          ...item,
          count: item.count += 1
        }
      }
      return item
    })

    setCartItems(foundThisCard)
  }

  const minusCount = (id: number) => {
    const foundThisCard = cartItems.map((item: any) => {
      if (item.id == id) {
        return {
          ...item,
          count: item.count -= 1
        }
      }
      return item
    })

    setCartItems(foundThisCard)
  }

  const countTotalPrice = () => {
    setTotalPrice(
      cartItems.reduce((prev, cur: any) => {return prev + cur.price * cur.count}, 0)
    )
  }

  const countTotalAmount = () => {
    setTotalAmount(
      cartItems.reduce((prev, cur: any) => {return prev + cur.count}, 0)
    )
  }

  const openDeliveryModal = () => {
    setDeliveryModalOpen(!isDeliveryModalOpen)
  }

  const openCardModal = (item: any) => {
    setCardModalOpen(!isCardModalOpen),
    setSelectedProduct(item)
  }

  // !UseEffects

  // count total
  useEffect(() => {
    countTotalPrice()
    countTotalAmount()
  }, [addToCart, addCount, minusCount, deleteItemFromCart])

  // toggle 'is-lock' class on body element
  useEffect(() => {
    isDeliveryModalOpen || isCardModalOpen
      ? document.body.classList.add('is-lock')
      : document.body.classList.remove('is-lock')
  }, [isDeliveryModalOpen, isCardModalOpen])

  return (
    <>
      <Header />

      <CategoryContext.Provider value={{currentCategory, setCurrentCategory}}>
        <CartContext.Provider value={{cartItems, addToCart, deleteItemFromCart, addCount, minusCount, totalPrice, totalAmount}}>
          <CardContext.Provider value={{openDeliveryModal, openCardModal}}>
            <Home />

            {
              isDeliveryModalOpen 
              ? <Delivery openModal={openDeliveryModal}/>
              : null
            }

            {
              isCardModalOpen ?
                <CardModal item={selectedProduct} isCardModalOpen={isCardModalOpen} setCardModalOpen={setCardModalOpen}/>
                : null
            }
          </ CardContext.Provider>
        </CartContext.Provider>
      </CategoryContext.Provider>


      
      <Footer />
    </>
  )
}

export default App
