import React from 'react'
import { Spoller } from '../Spoller'

import './style.scss'
import { dataAsk } from '../../utils/data'
export const AskedSection = () => {

   return (
      <section className='quati'>
         <div className="quati__container container">
            <div className="quati__top">
               <h2 className="quati__title section-title">
                  Întrebări frecvente și răspunsuri.
               </h2>
            </div>
            {
               dataAsk?.map((ask) =>
                  <Spoller
                     key={ask.id}
                     title={ask.title}
                  >
                    {ask.body}
                  </Spoller>
               )
            }
         </div>
      </section>
   )
}
