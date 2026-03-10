import { useContext } from 'react'
import { CategoryContext } from '../../context/CategoryContext.tsx'

import Categories from "../Categories/Categories";
import CardItem from '../CardItem/Cardtem.tsx'
import Cart from "../Cart/Cart";

import cards from '../../data/cards.json'

const Catalog = () => {
  const { currentCategory } : any = useContext(CategoryContext)

  return ( 
    <>
      <Categories />

      <div className="tabs__body container">
        <Cart />     

        <div className="products__catalog">
          { 
            cards.map((item) => {
              const renderingItem = currentCategory === item.category ? <CardItem item={item} key={item.id}/> : null
              return renderingItem
            })
          }
        </div>

      </div>
    </>
  )
}
 
export default Catalog;