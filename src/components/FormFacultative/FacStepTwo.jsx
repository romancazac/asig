import { ErrorMessage, Field, FieldArray } from 'formik'
import React from 'react'
import { Spoller } from '../Spoller'

export const FacStepTwo = ({ values }) => {
   return (



      <div  className="form__inp-wrapp">
         <Spoller
            active={0}
            title={`${values.personalInfo.name} ${values.personalInfo.birth}`}
            className={'spoller-form'}
            form='medical'
         >
            <div className='form__line' >
               <Field
                  name={`personalInfo.name`}
                  placeholder="Nume Prenume"
                  className="spoller-form__input form__input"
               />
               <ErrorMessage name={`personalInfo.name`} component="span" className='form__error' />
            </div>
            <div className='form__line' >
               <Field
                  name={`personalInfo.code`}
                  placeholder="Cod Personal (IDNP)"
                  className="spoller-form__input  form__input"
               />
               <ErrorMessage name={`personalInfo.code`} component="span" className='form__error' />
            </div>
            <div className='form__line' >
               <Field
                  name={`personalInfo.passaport`}
                  placeholder="Numar Pasaportului"
                  className="spoller-form__input  form__input"
               />
               <ErrorMessage name={`personalInfo.passaport`} component="span" className='form__error' />
            </div>
         </Spoller>

      </div>





   )
}
