import React from 'react'
import './style.scss'

import svg from '../../assets/img/img-main.svg'
import video from "../../assets/img/video.mp4";
import video2 from "../../assets/img/01.mp4";
export const MainSection = () => {
  return (
    <section className='main-section'>
      <div className='container'>
        <div className="main-section__row">
          <div className="main-section__content">
            <h1 className="main-section__title section-title">
             <span>Asigurări</span> 
              Simplu. Rapid. Online.</h1>
            <h2 className="main-section__subtitle section-subtitle">Primul service complet digital din Republica Moldova. Asigurările online sunt emise instant și semnate electronic</h2>
            <a href="#asig" className="main-section__link btn-block">Comanda acum</a>
          </div>
          <img className='main-section__img' src={svg} alt="asig" />
        </div>
      </div>
    </section>

  )
}
