import React from 'react'
import './style.scss'
import m from '../../assets/img/cards/medical.png'
import m1 from '../../assets/img/cards/car1.png'
import m2 from '../../assets/img/cards/car2.png'
import m4 from '../../assets/img/cards/medical-optional.png'
import m5 from '../../assets/img/cards/real-estate.png'
import { Link } from 'react-router-dom'
export const CardsSection = () => {
  return (
    <section className='cards' id="asig">
      <div className="cards__container container">
        <div className="cards__top">
          <h2 className="cards__title section-title">Asigurări</h2>
          <h2 className="cards__subtitlw section-subtitle">Comparăm oferte de la majoritatea companiilor pentru a găsi asigurarea potrivită pentru dvs.</h2>
        </div>
        <div className="cards__row">
          <div className="cards__column cards__column_medical">
            <img className="cards__img" src={m} alt="" />
            <div className="cards__content">
              <h3 className="cards__title">Medicală pentru călătorii</h3>
              <p className="cards__text">Pentru rezidenți, valabilă peste hotare.</p>  
            </div>
            <Link to='medical' className="cards__link btn-arr"> <span>Comanda</span></Link>
          </div>
          <div className="cards__column cards__column_green">
            <img className="cards__img" src={m1} alt="" />
            <div className="cards__content">
              <h3 className="cards__title">Carte Verde</h3>
              <p className="cards__text">Pentru vehicule înmatriculate în Moldova, valabilă peste hotare.</p>  
            </div>
            <Link to='green-card' className="cards__link btn-arr"> <span>Comanda</span></Link>
          </div>
          <div className="cards__column cards__column_blue">
            <img className="cards__img" src={m2} alt="" />
            <div className="cards__content">
              <h3 className="cards__title">RCA</h3>
              <p className="cards__text">Pentru vehicule înmatriculate în Moldova.</p>  
            </div>
            <Link to='rca' className="cards__link btn-arr"> <span>Comanda</span></Link>
          </div>
          <div className="cards__column cards__column_pink">
            <img className="cards__img" src={m4} alt="" />
            <div className="cards__content">
              <h3 className="cards__title">Medicala facultativă</h3>
              <p className="cards__text">Pentru nerezidenți, valabilă în Moldova.</p>  
            </div>
            <Link to='medical-facultative' className="cards__link btn-arr"> <span>Comanda</span></Link>
          </div>
          <div className="cards__column cards__column_orange">
            <img className="cards__img" src={m5} alt="" />
            <div className="cards__content">
              <h3 className="cards__title">Ipoteca</h3>
              <p className="cards__text">Pentru ipotecă și bunuri imobile gajate.</p>  
            </div>
            <Link to='ipoteca' className="cards__link btn-arr"> <span>Comanda</span></Link>
          </div>
        </div>

      </div>

    </section>
  )
}
