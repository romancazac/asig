import React from 'react'
import './style.scss'
import m from '../../assets/img/cards/medical.png'
export const CardsSection = () => {
  return (
    <section className='cards' id="asig">
      <div className="cards__container container">
        <div className="cards__top">
          <h2 className="cards__title section-title">Asigurări</h2>
          <h2 className="cards__subtitlw section-subtitle">Comparăm oferte de la majoritatea companiilor pentru a găsi asigurarea potrivită pentru dvs.</h2>
        </div>
        <div className="cards__row">
          <div className="cards__column">
            <img className="cards__img" src={m} alt="" />
            <div className="cards__content">
              <h3 className="cards__title">Medicală pentru călătorii</h3>
              <p className="cards__text">Pentru rezidenți, valabilă peste hotare.</p>  
            </div>
            <a href="#" className="cards__link btn-arr"> <span>Comanda</span></a>
          </div>
        </div>

      </div>

    </section>
  )
}
