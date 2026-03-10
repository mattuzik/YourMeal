import { useContext } from 'react'
import { ModalsContext } from '../../App'
import { CartContext } from '../../context/CartContext'

import CartItem from '../CartItem/CartItem'

const Cart = () => {
  const { cartItems, addCount, totalPrice, totalAmount } : any = useContext(CartContext)
  const { openDeliveryModal } : any = useContext(ModalsContext)

  return ( 
    <div className="cart">
      <header className="cart__header">
        <h3 className="cart__header-title">Корзина</h3>
        <div className="cart__header-counter">{totalAmount}</div>
      </header>

      {
        cartItems.length > 0 
        ? <div className="cart__body">
            <ul className="cart__cards">
              {
                cartItems.map((item: any, id: number) => {
                  return <CartItem 
                    item={item}
                    onAddCountClick={() => addCount(item.id)}
                    key={id}
                  />
                })
              }
            </ul>
            <div className="cart__total">
              <p className="cart__total-text">Итого</p>
              <div className="cart__total-price">{totalPrice}₽</div>
            </div>

            {
              totalPrice >= 599 
                ? <div className="cart__delivery">
                    <img className="cart__delivery-image" src="./icons/delivery.svg"></img>
                    <p className="cart__delivery-text">Бесплатная доставка</p>
                  </div>
                : null
            }
            <button className="cart__order-button" onClick={() => openDeliveryModal()}>Оформить заказ</button>

          </div>

        : <div className="alert alert-secondary" role="alert">Тут пока пусто :(</div>
      }
    </div>
  )
}
 
export default Cart;