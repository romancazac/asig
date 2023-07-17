import React, { useState } from 'react'
import { FormMedical } from '../FormMedical'

export const StepsForm = () => {
   const [step,setStep] = useState(1);
   const itemsStep = [
      {  id:1,
         name:"Călătorie"
      },
      {  id:2,
         name:"Persoane"
      },
      {  id:3,
         name:"Confirmare"
      },
   ]
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
                     
                     {/* <li>2. Persoane</li>
                     <li>3. Confirmare</li> */}
                  </ul>
               </nav>
               <FormMedical setStep={setStep}/>
            </div>
         </div>
      </div>
   )
}
