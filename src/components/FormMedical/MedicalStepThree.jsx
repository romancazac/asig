import React from 'react'
import { Confirme } from '../Confirme'
import {format} from 'date-fns'
import { ErrorMessage, Field } from 'formik'
export const MedicalStepThree = ({values}) => {
   
   return (

      <>
      
        <div className="form__line">
          <Confirme
            bg='cards__column_medical'
            price={values.price}
          >
            <div className="confirm__row">
              <span>Teritoriul asigurat:</span>
              <span>{values.country.join(', ')}</span>
            </div>
            <div className="confirm__row">
              <span>Tipul călătoriei:</span>
              <span>{values.multiple ? 'Multiple călătorii' : 'O singură călătorie'}</span>
            </div>
            <div className="confirm__row">
              <span>Perioada de asigurare:</span>
              <span>{`${format(values?.startDate, 'MM-dd-yyyy')} - ${format(values?.endDate, 'MM-dd-yyyy')}`}</span>
            </div>
            <div className="confirm__row">
              <span>Nr. de zile asigurate:</span>
              <span>{values.daysAsig}</span>
            </div>
            <div className="confirm__row">
              <span>Scopul călătoriei:</span>
              <span>{values.scope}</span>
            </div>
            <div className="confirm__row">
              <span>Compania de asigurare:</span>
              <span>{values.company}</span>
            </div>

            {
              values.personalInfo
                .map((item, i) =>
                (
                  <div className="confirm__row">
                    <span>Persoana: {i + 1}</span>
                    <p>
                      {Object.entries(item).map((i) =>
                        <> {i[0] !== "id" && i[1]},</>
                      )}
                    </p>

                  </div>


                )

                )

            }
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
