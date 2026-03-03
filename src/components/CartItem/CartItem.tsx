import { useContext } from 'react'
import { CartContext } from '../../App'


const CartItem = (props: any) => {
  const {
    item,
    onAddCountClick
  } = props

  const { deleteItemFromCart, minusCount } : any = useContext(CartContext)

  const onMinusCount = (item: any) => {
    if (item.count > 1) {
      minusCount(item.id)
    }
    else {
      deleteItemFromCart(item)
    }
  }

  return (
  <li className="cart__card card">
    <div className="card__content">
      <img src={item.imgSrc} className="card__image" />
      <div className="card__content-text-wrapper">
        <h5 className="card__content-title">{item.title}</h5>
        <p className="card__content-weight">{item.weight}г</p>
        <p className="card__content-price">{item.price}₽</p>
      </div>
    </div>
    <div className="card__controls" >
      <div className="card__control" onClick={() => onMinusCount(item)}>-</div>
      <div className="card__counter">{item.count}</div>
      <div className="card__control" onClick={onAddCountClick}>+</div>
    </div>
  </li>
  )
}
 
export default CartItem