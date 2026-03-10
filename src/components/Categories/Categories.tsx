import { useContext } from 'react'
import {CategoryContext} from '../../context/CategoryContext'

type category = {
  title: string,
  imgSrc: string,
  category: number
}

const categories: category[] = [ 
  {
    title: 'Бургер',
    imgSrc: '/icons/burger.svg',
    category: 0
  },
  {
    title: 'Закуски',
    imgSrc: '/icons/snacks.svg',
    category: 1
  },
  {
    title: 'Хот-доги',
    imgSrc: '/icons/hot-dogs.svg',
    category: 2
  }
]

const Categories = () => {
  const { currentCategory, setCurrentCategory } : any = useContext(CategoryContext)

  return (
  <header className="tabs__header container">
    <div className="tabs__buttons">
      {categories.map((item) => {
            return (
              <button 
                className={`tabs__button ${currentCategory === item.category ? 'is-active' : ''}`} 
                type="button" role="tab" 
                key={item.category}
                onClick={() => setCurrentCategory(item.category)}
              >
                <img src={item.imgSrc} className="tabs__button-image" />
                {item.title}
              </button>
            )
        })}
    </div>
  </header>
  )
}
 
export default Categories