import { useContext } from 'react'
import { CardContext } from '../../App'

const CardItem = (props: any) => {
  const {
    item
  } = props

  const { openCardModal } : any = useContext(CardContext)

  return (
    <>
    <div className="products__card">
      <img src={item.imgSrc} className="products__card-image" />
      <h3 className="products__card-price">{item.price}₽</h3>
      <p className="products__card-name">{item.title}</p>
      <p className="products__card-weight">{item.weight}г</p>
      <button className="products__card-button" onClick={() => openCardModal(item)}>Добавить</button>
    </div>
    </>
  )
}
 
export default CardItem