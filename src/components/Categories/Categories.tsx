import { useContext } from 'react'
import {CategoryContext} from '../../App'

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
      {
        categories.map((item) => {
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
        })
      }

      
      {/*       
      
      <button className="tabs__button" type="button" id="tab-4" role="tab" aria-controls="tabpanel-4" data-js-tabs-button aria-selected="false">
        <img src="/icons/combos.svg" className="tabs__button-image" />
        Комбо
      </button>          
      
      <button className="tabs__button" type="button" id="tab-5" role="tab" aria-controls="tabpanel-5" data-js-tabs-button aria-selected="false">
        <img src="/icons/shawarma.svg" className="tabs__button-image" />
        Шаурма
      </button>
                      
      <button className="tabs__button" type="button" id="tab-6" role="tab" aria-controls="tabpanel-6" data-js-tabs-button aria-selected="false">
        <img src="/icons/pizzza.svg" className="tabs__button-image" />
        Пицца
      </button>

      <button className="tabs__button" type="button" id="tab-7" role="tab" aria-controls="tabpanel-7" data-js-tabs-button aria-selected="false">
        <img src="/icons/wok.svg" className="tabs__button-image" />
        Вок
      </button>

      <button className="tabs__button" type="button" id="tab-8" role="tab" aria-controls="tabpanel-8" data-js-tabs-button aria-selected="false">
        <img src="/icons/dessert.svg" className="tabs__button-image" />
        Десерты
      </button>          
      
      <button className="tabs__button" type="button" id="tab-9" role="tab" aria-controls="tabpanel-9" data-js-tabs-button aria-selected="false">
        <img src="/icons/sauce.svg" className="tabs__button-image" />
        Соусы
      </button> */}
    </div>
  </header>
  )
}
 
export default Categories