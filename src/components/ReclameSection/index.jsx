import React from 'react'
import imgs from '../../assets/img/img.png'
import './style.scss'
export const ReclameSection = () => {
   return (
      <section className='reclame'>
         <div className="reclame__row container">
            <div className="reclame__column">
               <img className='reclame__img' src={imgs} alt="" />
            </div>
            <div className="reclame__column">
               <h2 className="reclame__title section-title">Orice asigurare direct de pe smartphone.</h2>
               <p className="reclame__text">
                  Polița de asigurare direct de pe smartphone. Orice poliță poate fi comandată, achitată și accesată ulterior direct de pe telefon.

                  Cu iAsig totul devine super simplu și transparent. În doar 1 min ești asigurat pentru orice produs disponibil.
               </p>
               <div className="reclame__items items-reclame">
                  <div className="items-reclame__col">
                     <span  className='items-reclame__number'>24/7 </span>
                     <p className='items-reclame__text'>Disponibil</p>
                  </div>
                  <div className="items-reclame__col">
                     <span  className='items-reclame__number'>  1 min</span>
                     <p className='items-reclame__text'>Ca să fii asigurat</p>
                  </div>
                  <div className="items-reclame__col">
                     <span  className='items-reclame__number'>100%</span>
                     <p className='items-reclame__text'>Online</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
