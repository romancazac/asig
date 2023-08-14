
import { ErrorMessage, Field } from 'formik'
import { CheckboxFormik } from '../CheckboxFormik'

import { dataMonth } from '../../utils/data'
import { DatePickerFormik } from '../../DatePickerFormik'
import { MultiSelect } from '../MultiSelect/MultiSelect'
import { Confirme } from '../Confirme'
import { AsigCompany } from '../AsigCompany'
import { addDaysToDate } from '../../utils/addDaysToDate'


export const RcaStepOne = ({ values, isValid, days }) => {

   return (
      <>

         <div className="form__line">
            <span className="form__label">Asigurat IDNP sau IDNO</span>
            <Field
               name='asigurant'
               className='form__input'
               placeholder='Asigurat IDNP sau IDNO'
            />
            <ErrorMessage name='asigurant' component="span" className='form__error' />
         </div>
         <div className="form__line">
            <span className="form__label">Număr certificat de înmatriculare </span>

            <Field
               name='numberCertificat'
               className='form__input'
               placeholder='Număr certificat de înmatriculare '
            />
            <ErrorMessage name='numberCertificat' component="span" className='form__error' />

         </div>

         <div className="form__line">
            <span className="form__label">Data inceperii asigurarii</span>
            <DatePickerFormik
               name='startDate'
               startDate={values.startDate}
               className='form__picker picker'
               placeholderText='Data inceperii asigurarii'

            />
            <ErrorMessage name='startDate' component="span" className='form__error' />

         </div>

         <div className="form__line">

            <CheckboxFormik name='term'>Sunt de acord cu termenii și condițiile asig.md și îmi exprim consimțământul pentru prelucrarea datelor cu caracter personal.</CheckboxFormik>
            <ErrorMessage name='term' component="span" className='form__error' />

         </div>

         {
            (values.term ) &&
            <>
               <div className="form__line">
                  <Confirme
                     bg='cards__column_medical'
                     price={false}
                  >
                     <div className="confirm__row">
                        <span>Perioada asigurată:</span>
                        <span>
                           {
                              addDaysToDate(values.startDate, values.daysAsig)
                           }
                        </span>
                     </div>
                  </Confirme>
               </div>

               <AsigCompany values={values} form={'greenCard'} />
               <ErrorMessage name='price' component="span" className='form__error' />           
            </>
         }
      </>
   )
}
