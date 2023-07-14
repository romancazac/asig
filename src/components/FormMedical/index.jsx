
import { Formik, Form, Field, ErrorMessage, FieldArray, } from 'formik';
import * as Yup from 'yup';

import { dataCountries, dataDays, dataScope } from '../../utils/dataCountries';

import { v4 as uuidv4 } from 'uuid';
import { MultiSelect } from '../MultiSelect/MultiSelect';
import { DatePickerFormik } from '../../DatePickerFormik';
import { CheckboxFormik } from '../CheckboxFormik';
import { InputFormat } from '../InputFormat';

import './style.scss';
import { useEffect } from 'react';
import { AsigCompany } from '../AsigCompany';


export const FormMedical = () => {







  const intialValues = {
    country: [],
    multiple: false,
    startDate: '',
    endDate: '',
    daysAsig: '',
    scope: '',
    dateBirth: [{ name: "", id: uuidv4() }]
  }

  const MedicalSchema = Yup.object().shape({
    country: Yup.array().min(1, 'Selectați una sau mai multe țări'),
    daysAsig: Yup.string().required('Selectați numărul de zile asigurate'),
    // endDate: Yup.string().required('Selectati sfârșitul perioadei asigurate'),
    startDate: Yup.string().required('Selctati începutul perioadei asigurate'),
    scope: Yup.string().required('Selectati scopul calatoriei'),
    dateBirth: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().min(10, 'Introduceţi data nașterii în formatul zz.ll.aaaa')
            .required('Data nașterii este obligatoriu'), // these constraints take precedence

        })
      )
      .required('Must have friends') // these constraints are shown if and only if inner constraints are satisfied


  })



  return (
    <div className='form'>
      <Formik
        initialValues={intialValues}
        validationSchema={MedicalSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ errors, touched, values, isValid }) => {       
          useEffect(() => {
            if (isValid) {
              console.log(values)
            }
          }, [isValid]);
          return (
            <Form>
          
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
                name="dateBirth"
                render={arrayHelpers => (
                  <>
                    {
                      values.dateBirth.map((user, i) =>

                        <div className='form__line' key={user.id}>
                          <span className='form__label'>Data nasterii pers. asigurate</span>
                          <div className="form__inp-wrapp">
                            <InputFormat
                              name={`dateBirth[${i}].name`}
                            />
                            {
                              values.dateBirth.length > 1 && i !== 0 &&
                              <button onClick={() => arrayHelpers.remove(i)} type='button' className="form__remove">
                                X
                              </button>
                            }
                          </div>


                          <ErrorMessage name={`dateBirth[${i}].name`} component="span" className='form__error' />

                        </div>

                      )
                    }
                    <button onClick={() => arrayHelpers.push({ name: " ", id: uuidv4() })} type='button' className="form__add ">
                      <span>Adauga inca o persoana</span>
                    </button>

                  </>





                )}
              />
              <AsigCompany/>

              <button type='submit' className='form__btn btn-block'>
                Next step
              </button>
            </Form>
          )
        }
        }
      </Formik>
    </div >
  );
};
