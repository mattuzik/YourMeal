const Delivery = ({openModal} : any) => {
  return ( 
    <div className="cart__modal">
      <div className="modal delivery">
        <div className="modal__window delivery__columns-wrapper">
          <div className="delivery__column image-column">
            <img src="./images/modals/delivery/bagel.png" alt="" className="delivery__column-img" />
          </div>
          <div className="delivery__column form-column">
            <button className="delivery__close-button" onClick={() => openModal()}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5.07568" y="5.28247" width="1" height="20" transform="rotate(-45 5.07568 5.28247)" fill="#B1B1B1" />
                <rect x="5.70703" y="19.8491" width="1" height="20" transform="rotate(-135 5.70703 19.8491)" fill="#B1B1B1" />
              </svg>
            </button>
            <form action="/" className="delivery__form">
              <h3 className="delivery__column-title">Доставка</h3>
              <div className="delivery__form-cell delivery__form-wide">
                <input type="text" placeholder="Ваше имя" className="delivery__form-control" required />
              </div>                      
              <div className="delivery__form-cell delivery__form-wide">
                <input type="text" placeholder="Телефон" className="delivery__form-control" required />
              </div>


              <div className="delivery__form-cell delivery__form-wide">
                <input type="text" placeholder="Улица, дом, квартира" className="delivery__form-control" required />
              </div>

              <div className="delivery__form-cell">
                <input type="text" placeholder="Этаж" className="delivery__form-control" required />
              </div>                      
              
              <div className="delivery__form-cell">
                <input type="text" placeholder="Домофон" className="delivery__form-control" required />
              </div>

            </form>
            <button className="delivery__order-button" type="submit">Оформить</button>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Delivery