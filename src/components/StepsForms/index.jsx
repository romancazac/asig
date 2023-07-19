import React, { useContext, useState } from 'react'
import { FormMedical } from '../StepsMedical'
import { FormContext } from '../../contexts/FormContext'

export const StepsForm = ({children,itemsStep}) => {

   const {step} = useContext(FormContext)

   return (
      <div className='steps'>
         <div className="container">
            <div className="form">
               <nav className="form__nav nav-form">
                  <ul className="nav-form__list">
                     {
                        itemsStep?.map((s) => 
                        <li key={s.id} className={`nav-form__item ${s.id === step ? '_active' : ''}`}>{s.id} {s.name}</li>
                        )
                     }
                     
                  </ul>
               </nav>
               {children}
            </div>
         </div>
      </div>
   )
}
