import { ErrorMessage, Field } from 'formik'
import React from 'react'


export const IpotecStepTwo = ({ values }) => {
   return (



      <>
         <div className='form__line' >
            <span className="form__label">Cod cadastral impobil</span>
            <Field
               name="codeCadastru"
               placeholder="Cod cadastral impobil"
               className="spoller-form__input form__input"
            />
            <ErrorMessage name="codeCadastru" component="span" className='form__error' />
         </div>
         <div className='form__line' >
            <span className="form__label">Numele Prenumele</span>
            <Field
               name={`personalInfo.name`}
               placeholder="Nume Prenume"
               className="spoller-form__input form__input"
            />
            <ErrorMessage name={`personalInfo.name`} component="span" className='form__error' />
         </div>

         <div className='form__line' >
            <span className="form__label">Cod Personal (IDNP)</span>

            <Field
               name={`personalInfo.passaport`}
               placeholder="Serie/Număr buletin de identitate "
               className="spoller-form__input  form__input"
            />
            <ErrorMessage name={`personalInfo.passaport`} component="span" className='form__error' />
         </div>
         <div className='form__line' >
            <span className="form__label">Serie/Număr buletin de identitate</span>

            <Field
               name={`personalInfo.code`}
               placeholder="Cod Personal (IDNP)"
               className="spoller-form__input  form__input"
            />
            <ErrorMessage name={`personalInfo.code`} component="span" className='form__error' />
         </div>
         <div className='form__line' >
            <span className="form__label">Adresa de domiciliu</span>
            <Field
               name={`personalInfo.adress`}
               placeholder="Adresa de domiciliu"
               className="spoller-form__input  form__input"
            />
            <ErrorMessage name={`personalInfo.adress`} component="span" className='form__error' />
         </div>


      </>





   )
}
