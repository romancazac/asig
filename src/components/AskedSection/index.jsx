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
               content='Da. Toate tipurile de asigurări care sunt comandate și achitate online sunt emise imediat în regim automat.'
            />
            <Spoller
               title='Care sunt metodele disponibile de achitare?'
               content='Orice comandă poate fi achitată online cu cardul bancar sau la terminale de plată, ghișeu bancar sau la poștă prin intermediul mPay.'
            />  <Spoller
               title='Asigurarea comandată online este valabilă instant?'
               content='Da. Toate tipurile de asigurări care sunt comandate și achitate online sunt emise imediat în regim automat.'
            />  <Spoller
               title='Cum primesc asigurarea?'
               content='Asigurarea o puteți descarca de pe site imediat dupa ce ați efectuat plata sau o primiţi in format PDF pe adresa de email indicată..'
            />  <Spoller
               title='Este valabilă asigurarea în format electronic?'
               content='Da. Asigurările în format electronic sunt valide și legale. Valabilitatea RCA și Carte Verde poate fi verificată pe rca.bnm.md
               Polița și contractul de asigurare sunt semnate electronic, valabilitatea semnăturii poate fi verificată pe msign.gov.md'
            />
         </div>
      </section>
   )
}
