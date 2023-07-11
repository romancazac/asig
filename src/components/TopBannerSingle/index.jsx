import React from 'react'
import './style.scss'
export const TopBannerSingle = ({ bg, img, title, text }) => {
   return (
      <div className='banner'>
         <div className="banner__container container">
            <div className={`banner__body ${bg}`}>
               <img src={img} alt="" className="banner__img" />
               <h1 className="banner__title section-title">{title}</h1>
               <p className="banner__text">{text}</p>
            </div>
         </div>


      </div>
   )
}
