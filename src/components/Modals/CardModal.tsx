import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const CardModal = ({item, isCardModalOpen, setCardModalOpen} : any) => {
  const { addToCart } : any = useContext(CartContext)
  const [addingCount, setAddingCount] = useState(1)

  const minusCount = () => {
    if (addingCount > 1) {
      setAddingCount((prev) => prev - 1)
    }
  }

  const onAddToCart = () => {
    addToCart(item, addingCount)
    setCardModalOpen(!isCardModalOpen)
  }
  
  return (
    <div className="">
      <div className="modal">
        <div className="modal__window product-card">
          <h2 className="product-card__title">{item.title}</h2>

          <div className="product-card__column">
            <img src={item.imgSrc} alt=""/>
          </div>
          <div className="product-card__column textable">
            <div className="product-card__info">
              <p className="product-card__desc">{item.desc}</p>
              <h6 className="product-card__text-title">Состав:</h6>
              <ul className="product-card__list">
                {
                  item.recipe.map((ing: string, i: number) => {
                    return <p className='' key={i}>{ing}</p>
                  })
                }
              </ul>
            </div>

            <p className="product-card__weight">{item.weight} г</p>
          </div>

          <button className="product-card__button" onClick={onAddToCart}>Добавить</button>

          <div className="product-card__column counter">
            <div className="product-card__counter card__controls">
              <div className="card__control" onClick={minusCount}>-</div>
              <div className="card__counter">{addingCount}</div>
              <div className="card__control" onClick={() => addingCount < 10 ? setAddingCount((prev) => prev + 1) : null}>+</div>
            </div>
            <h4 className="product-card__price">{item.price * addingCount}₽</h4>
          </div>

          <button className="close-btn" onClick={() => setCardModalOpen(!isCardModalOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5.07568" y="5.28247" width="1" height="20" transform="rotate(-45 5.07568 5.28247)" fill="#B1B1B1"></rect><rect x="5.70703" y="19.8491" width="1" height="20" transform="rotate(-135 5.70703 19.8491)" fill="#B1B1B1"></rect></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardModal