import React from 'react'
import { ErrorMessage, Field, FieldArray } from 'formik'
import { DatePickerFormik } from '../../DatePickerFormik'
import { InputFormat } from '../InputFormat'
import { MultiSelect } from '../MultiSelect/MultiSelect'
import { dataCountries, dataScope, dataDays, dataFactori } from '../../utils/data'
import { CheckboxFormik } from '../CheckboxFormik'

export const FacStepOne = ({ errors, touched, values }) => {

   return (
      <>

         <div className="form__line">
            <span className='form__label'>Tara de resedinta</span>
            <Field
               name="country"
               placeholder="Destinatia Calatoriei"
               isMulti={false}
               component={MultiSelect}
               options={dataCountries}
               errorClass={errors.country && touched.country ? 'error' : ''}
            />
            <ErrorMessage name='country' component="span" className='form__error' />
         </div>

         <div className="form__row">
            <div className="form__col">
               <span className='form__label'>Data inceperii asigurarii</span>
               <DatePickerFormik
                  name='startDate'
                  minDate={new Date()}
                  className='form__picker picker'
                  placeholderText='Data inceperii asigurarii'
                  errorClass={errors.startDate && touched.startDate ? 'error' : ''}
               />
               <ErrorMessage name='startDate' component="span" className='form__error' />

            </div>

         </div>

         <div className='form__line'>
            <span className='form__label'>Perioada de asigurare</span>

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
         <div className='form__line'>
            <span className='form__label'>Data nasterii pers. asigurate</span>
            <div className="form__inp-wrapp">
               <InputFormat
                  name="personalInfo.birth"
                  placeholder="Data nasterii pers. asigurate"
               />
            
            </div>


            <ErrorMessage name={`personalInfo.birth`} component="span" className='form__error' />

         </div>

         <div className="form__line">
            <span className='form__label'>Facturi de risc</span>

            <Field
               name="risc"
               placeholder="Facturi de risc"
               isMulti={true}
               component={MultiSelect}
               options={dataFactori}
               errorClass={errors.country && touched.country ? 'error' : ''}
            />
            <ErrorMessage name='risc' component="span" className='form__error' />
         </div>
         <div className="form__line"><CheckboxFormik name='acoperire'>Include acoperire extinsă (tratament staționar)</CheckboxFormik></div>

      </>
   )
}
