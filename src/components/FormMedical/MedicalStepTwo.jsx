import { ErrorMessage, Field, FieldArray } from 'formik'
import React from 'react'
import { Spoller } from '../Spoller'

export const MedicalStepTwo = ({ values }) => {
   return (

      <>

         <FieldArray
            name="personalInfo"
            render={() => (
               <>
                  {
                     values.personalInfo.map((user, i) =>



                        <div key={user.id} className="form__inp-wrapp">
                           <Spoller
                              active={0}
                              title={`${user.name} ${user.birth}`}
                              className={'spoller-form'}
                              form='medical'
                           >
                              <div className='form__line' >
                                 <Field
                                    name={`personalInfo[${i}].name`}
                                    placeholder="Nume Prenume"
                                    className="spoller-form__input form__input"
                                 />
                                 <ErrorMessage name={`personalInfo[${i}].name`} component="span" className='form__error' />
                              </div>
                              <div className='form__line' >
                                 <Field
                                    name={`personalInfo[${i}].code`}
                                    placeholder="Cod Personal (IDNP)"
                                    className="spoller-form__input  form__input"
                                 />
                                 <ErrorMessage name={`personalInfo[${i}].code`} component="span" className='form__error' />
                              </div>
                              <div className='form__line' >
                                 <Field
                                    name={`personalInfo[${i}].passaport`}
                                    placeholder="Numar Pasaportului"
                                    className="spoller-form__input  form__input"
                                 />
                                 <ErrorMessage name={`personalInfo[${i}].passaport`} component="span" className='form__error' />
                              </div>
                           </Spoller>

                        </div>



                     )
                  }


               </>
            )}
         />

      </>

   )
}
