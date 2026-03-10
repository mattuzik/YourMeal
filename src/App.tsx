import { createContext, useEffect, useState } from 'react'

import { CartProvider } from './context/CartContext'
import { CategoryProvider } from './context/CategoryContext'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'

import Delivery from './components/Modals/Delivery'
import CardModal from './components/Modals/CardModal'

export const ModalsContext = createContext({});

function App() {
  // states
  const [isDeliveryModalOpen, setDeliveryModalOpen] = useState(false)
  const [isCardModalOpen, setCardModalOpen] = useState(false)

  const [selectedProduct, setSelectedProduct] = useState(null)

  // Functions
  const openDeliveryModal = () => {
    setDeliveryModalOpen(!isDeliveryModalOpen)
  }

  const openCardModal = (item: any) => {
    setCardModalOpen(!isCardModalOpen),
    setSelectedProduct(item)
  }

  // toggle 'is-lock' class on body element
  useEffect(() => {
    isDeliveryModalOpen || isCardModalOpen
      ? document.body.classList.add('is-lock')
      : document.body.classList.remove('is-lock')
  }, [isDeliveryModalOpen, isCardModalOpen])

  return (
    <>
      <Header />

      <CategoryProvider>
        <CartProvider>
          <ModalsContext.Provider value={{openDeliveryModal, openCardModal}}>
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
          </ ModalsContext.Provider>
        </CartProvider>
      </CategoryProvider>

      <Footer />
    </>
  )
}

export default App
