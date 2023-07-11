import React, { useState } from 'react'

import './style.scss'
export const Spoller = ({ title, content, id }) => {
   const [open, setOpen] = useState(false);


   return (
      <div className='quati__spoller spoller'>
         <div className="spoller__body">
            <button onClick={() => setOpen(!open)} className={`spoller__btn ${open ? "_active" : ''}`}><span>{title}</span></button>
            {
               open &&
               <div className="spoller__content">
                  {content}
               </div>
            }

         </div>

      </div>
   )
}
