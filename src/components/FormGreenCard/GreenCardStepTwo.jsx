import React from 'react'
import { Confirme } from '../Confirme'
import { addDaysToDate } from '../../utils/addDaysToDate'
import { ErrorMessage, Field } from 'formik'

export const GreenCardStepTwo = ({ values }) => {

   return (
      <>
         <div className="form__line">
            <Confirme
               bg='cards__column_medical'
               price={values.price}
            >
               <div className="confirm__row">
                  <span>Perioada asigurată:</span>
                  <span>{addDaysToDate(values?.startDate, values?.daysAsig)}</span>
               </div>
               <div className="confirm__row">
                  <span>Asigurat:</span>
                  <span>{values.asigurant}</span>
               </div>
               <div className="confirm__row">
                  <span>Teritoriul asigurat:</span>
                  <span>{values.country.name}</span>
               </div>
            </Confirme>
         </div>


         <div className="form__line">

            <Field
               name='phone'
               placeholder='Numar de telefon'
               className="form__input"
            />
            <ErrorMessage name='phone' component="span" className='form__error' />

         </div>
         <div className="form__line">
            <Field
               name='email'
               placeholder='Email(Optional)'
               className="form__input"
            />
         </div>

      </>
   )
}
