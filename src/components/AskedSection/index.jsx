import React from 'react'
import { Spoller } from '../Spoller'

import './style.scss'
export const AskedSection = () => {
   return (
      <section className='quati'>
         <div className="quati__container container">
            <div className="quati__top">
               <h2 className="quati__title section-title">
                  Întrebări frecvente și răspunsuri.
               </h2>
            </div>
            <Spoller
               title='Asigurarea comandată online este valabilă instant?'
            >
               Da. Toate tipurile de asigurări care sunt comandate și achitate online sunt emise imediat în regim automat.
            </Spoller>
            <Spoller
               title='Care sunt metodele disponibile de achitare?'

            >
               Orice comandă poate fi achitată online cu cardul bancar sau la terminale de plată, ghișeu bancar sau la poștă prin intermediul mPay.
            </Spoller>

            <Spoller
               title='Asigurarea comandată online este valabilă instant?'
            >
               Da. Toate tipurile de asigurări care sunt comandate și achitate online sunt emise imediat în regim automat.
            </Spoller>
            <Spoller
               title='Cum primesc asigurarea?'

            >
               Asigurarea o puteți descarca de pe site imediat dupa ce ați efectuat plata sau o primiţi in format PDF pe adresa de email indicată..
            </Spoller>

            <Spoller
               title='Este valabilă asigurarea în format electronic?'

            >
               Da. Asigurările în format electronic sunt valide și legale. Valabilitatea RCA și Carte Verde poate fi verificată pe rca.bnm.md
               Polița și contractul de asigurare sunt semnate electronic, valabilitatea semnăturii poate fi verificată pe msign.gov.md
            </Spoller>
         </div>
      </section>
   )
}
