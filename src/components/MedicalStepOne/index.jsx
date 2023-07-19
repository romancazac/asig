import React from 'react'
import { ErrorMessage, Field, FieldArray } from 'formik'
import { DatePickerFormik } from '../../DatePickerFormik'
import { InputFormat } from '../InputFormat'
import { MultiSelect } from '../MultiSelect/MultiSelect'
import { dataCountries,dataScope,dataDays } from '../../utils/data'
import { CheckboxFormik } from '../CheckboxFormik'
import { v4 as uuidv4 } from 'uuid';
export const MedicalStepOne = ({errors, touched, values}) => {
   
   return (
      <>
      
         <div className="form__line">
            <span className='form__label'>Destinatia Calatoriei</span>
            <Field
               name="country"
               placeholder="Destinatia Calatoriei"
               isMulti={true}
               component={MultiSelect}
               options={dataCountries}
               errorClass={errors.country && touched.country ? 'error' : ''}
            />
            <ErrorMessage name='country' component="span" className='form__error' />
         </div>
         <div className="form__line"><CheckboxFormik name='multiple'>Multiple călătorii</CheckboxFormik></div>
         <div className="form__row">
            <div className="form__col">
               <span className='form__label'>Data inceperii asigurarii</span>
               <DatePickerFormik
                  name='startDate'
                  selectsEnd
                  startDate={values.startDate}
                  endDate={values.endDate}
                  minDate={values.startDate}
                  className='form__picker picker'
                  placeholderText='Data inceperii asigurarii'
                  errorClass={errors.startDate && touched.startDate ? 'error' : ''}
               />
               <ErrorMessage name='startDate' component="span" className='form__error' />

            </div>
            {
               !values.multiple &&
               <div className="form__col">
                  <span className='form__label'>Data sfirsit asigurarii</span>
                  <DatePickerFormik
                     name='endDate'
                     selectsEnd
                     startDate={values.startDate}
                     endDate={values.endDate}
                     minDate={values.startDate}
                     className='form__picker picker'
                     placeholderText='Data sfirsit asigurarii'

                  />
                  <ErrorMessage name='endDate' component="span" className='form__error' />
               </div>
            }
         </div>
         {
            values.multiple &&
            <div className='form__line'>
               <span className='form__label'>Nr de zile asigurate</span>

               <Field
                  name="daysAsig"
                  placeholder="Nr de zile asigurate"
                  isMulti={false}
                  component={MultiSelect}
                  options={dataDays}
                  errorClass={errors.daysAsig && touched.daysAsig ? 'error' : ''}
               />
               <ErrorMessage name='daysAsig' component="span" className='form__error' />
            </div>
         }
         <div className='form__line'>
            <span className='form__label'>Scopul calatoriei</span>
            <Field
               name="scope"
               placeholder="Scopul calatoriei"
               isMulti={false}
               component={MultiSelect}
               options={dataScope}
               errorClass={errors.scope && touched.scope ? 'error' : ''}
            />
            <ErrorMessage name='scope' component="span" className='form__error' />
         </div>
         
         <FieldArray
            name="personalInfo"
            render={arrayHelpers => (
               <>
                  {
                     values.personalInfo.map((user, i) =>

                        <div className='form__line' key={user.id}>
                           <span className='form__label'>Data nasterii pers. asigurate</span>
                           <div className="form__inp-wrapp">
                              <InputFormat
                                 name={`personalInfo[${i}].birth`}
                                 placeholder="Data nasterii pers. asigurate"
                              />
                              {
                                 values.personalInfo.length > 1 && i !== 0 &&
                                 <button onClick={() => arrayHelpers.remove(i)} type='button' className="form__remove">
                                    X
                                 </button>
                              }
                           </div>


                           <ErrorMessage name={`personalInfo[${i}].birth`} component="span" className='form__error' />

                        </div>

                     )
                  }
                  <button onClick={() => arrayHelpers.push({ name: '', birth: '', code: '', passaport: '', id: uuidv4() })} type='button' className="form__add ">
                     <span>Adauga inca o persoana</span>
                  </button>

               </>
            )}
         />


      </>
   )
}
