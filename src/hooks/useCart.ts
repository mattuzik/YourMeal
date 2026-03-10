import { useState } from "react"

const useCart = () => {
  // const [cartItems, setCartItems] = useState([] as string[])
  const [cartItems, setCartItems] = useState<any>(() => {
    const savedTasks = localStorage.getItem('cartItems');
    return savedTasks ? JSON.parse(savedTasks) : [];
  })

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

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
      cartItems.reduce((prev: any, cur: any) => {return prev + cur.price * cur.count}, 0)
    )
  }

  const countTotalAmount = () => {
    setTotalAmount(
      cartItems.reduce((prev: any, cur: any) => {return prev + cur.count}, 0)
    )
  }

  return {
    cartItems, 
    addToCart, 
    deleteItemFromCart, 
    addCount, 
    minusCount, 
    totalPrice, 
    totalAmount,
    countTotalPrice,
    countTotalAmount
  }
}

export default useCart