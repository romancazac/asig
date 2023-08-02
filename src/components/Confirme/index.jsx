import React from 'react'
import './style.scss'
export const Confirme = ({ bg, children, price }) => {
   return (
      <div className={`confirm ${bg}`}>

         {
            children
         }
         {
            !!price &&
            <div className="confirm__row">
               <span>Preț total:</span>
               <span>{price} Euro</span>
            </div>
         }

      </div>
   )
}
