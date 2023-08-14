import React from 'react'
import { ErrorMessage, Field, FieldArray } from 'formik'
import { DatePickerFormik } from '../../DatePickerFormik'
import { InputFormat } from '../InputFormat'
import { MultiSelect } from '../MultiSelect/MultiSelect'
import { dataCountries, dataScope, dataDays, dataFactori, dataImobile, dataBase, dataMonth, dataBenefice } from '../../utils/data'
import { CheckboxFormik } from '../CheckboxFormik'

export const IpotecStepOne = ({ errors, touched, values }) => {

   return (
      <>

         <div className="form__line">
            <span className='form__label'>Tip imobil</span>
            <Field
               name="type"
               placeholder="Tip imobil"
               isMulti={false}
               component={MultiSelect}
               options={dataImobile}
               errorClass={errors.type && touched.type ? 'error' : ''}
            />
            <ErrorMessage name='type' component="span" className='form__error' />
         </div>
         <div className="form__line">
            <span className='form__label'>Asigurare ipotecă în baza la</span>
            <Field
               name="base"
               placeholder="Asigurare ipotecă în baza la"
               isMulti={false}
               component={MultiSelect}
               options={dataBase}
               errorClass={errors.base && touched.base ? 'error' : ''}
            />
            <ErrorMessage name='base' component="span" className='form__error' />
         </div>
         <div className="form__line">
            <span className='form__label'>Valoare de piață, conform raport de evaluare (MDL)</span>
            <Field
               className='form__input'
               name="valoare"
               type="number"
               placeholder="Valoare de piață, conform raport de evaluare (MDL)"
               errorClass={errors.valoare && touched.valoare ? 'error' : ''}
            />
            <ErrorMessage name='valoare' component="span" className='form__error' />
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
            <span className='form__label'>Valabilitatea politei</span>

            <Field
               name="daysAsig"
               placeholder="Valabilitatea politei"
               isMulti={false}
               component={MultiSelect}
               options={dataMonth}
               errorClass={errors.daysAsig && touched.daysAsig ? 'error' : ''}
            />
            <ErrorMessage name='daysAsig' component="span" className='form__error' />
         </div>

         <div className="form__line">
            <span className='form__label'>Oranizația beneficiară</span>

            <Field
               name="organization"
               placeholder="Oranizația beneficiară"
               isMulti={false}
               component={MultiSelect}
               options={dataBenefice}
               errorClass={errors.organization && touched.organization ? 'error' : ''}
            />
            <ErrorMessage name='organization' component="span" className='form__error' />
         </div>

      </>
   )
}
