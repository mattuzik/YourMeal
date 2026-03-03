import { memo } from "react"

const Hero = () => {
  return ( 
    <section className="hero">
      <div className="hero__contain container-min">
        <img src="./images/hero/burger.svg" alt="" className="hero__image" />
        <div className="hero__content">
          <h1 className="hero__content-title">Только самые <span className="accent">сочные бургеры!</span></h1>
          <div className="hero__content-description">
            <p>Бесплатная доставка от 599₽</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)