import { useEffect } from 'react';

import { Formik, Form, Field, ErrorMessage, FieldArray, } from 'formik';
import * as Yup from 'yup';

import { dataCountries, dataDays, dataScope } from '../../utils/data';

import { v4 as uuidv4 } from 'uuid';
import { MultiSelect } from '../MultiSelect/MultiSelect';
import { DatePickerFormik } from '../../DatePickerFormik';
import { CheckboxFormik } from '../CheckboxFormik';
import { InputFormat } from '../InputFormat';

import './style.scss';
import { AsigCompany } from '../AsigCompany';



export const FormMedical = ({setStep}) => {

  const MedicalSchema = Yup.object().shape({
    multiple: Yup.boolean(),
    country: Yup.array().min(1, 'Selectați una sau mai multe țări'),
    daysAsig: Yup.string().required('Selectați numărul de zile asigurate'),
    startDate: Yup.string().required('Selctati începutul perioadei asigurate'),
    endDate: Yup.string().when("multiple", {
      is: false,
      then: (MedicalSchema) => MedicalSchema.required('Selectati sfârșitul perioadei asigurate'),
    }),
    scope: Yup.string().required('Selectati scopul calatoriei'),
    personalInfo: Yup.array().of(Yup.object().shape({
      // name: Yup.string()
      //   .required('Nume Prenume este obligatoriu'),
      birth: Yup.string()
        .min(10, 'Introduceţi data nașterii în formatul zz.ll.aaaa')
        .required('Data nașterii este obligatoriu'),
      // passport: Yup.string()
      //   .required('Numărul pașaportului este obligatoriu'),
      // code: Yup.string()
      //   .min(10, 'Codul introdus nu este valid')
      //   .required('Acest câmp este obligatoriu'),
    })

    )



  })
  const renderStepOne = (errors, touched, values) => {
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
              <button onClick={() => arrayHelpers.push({ name: " ", birth: '', code: '', passport: '', id: uuidv4() })} type='button' className="form__add ">
                <span>Adauga inca o persoana</span>
              </button>

            </>
          )}
        />


      </>
    )
  }

  const onNextStep = (valid,submitForm) => {

    if(valid){
      setStep(prev => prev +1)
    } else {
      submitForm()
    }
    
  }

  return (
    <>
      <Formik
        initialValues={{
          country: [],
          multiple: false,
          startDate: '',
          startDate: '',
          endDate: '',
          daysAsig: '',
          scope: '',
          personalInfo: [{ birth: '', code: '', passaport: '', name: "", id: uuidv4() }],
          price: ''
        }
        }
        validationSchema={MedicalSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ errors, touched, values, isValid, validateForm, submitForm }) => {

          useEffect(() => {
            validateForm()
          }, []);
          return (
            <Form>


              {renderStepOne(errors, touched, values)}
              {
                isValid && <AsigCompany values={values} />
              }

              <button type='button' onClick={() => onNextStep(isValid,submitForm)} className='form__btn btn-block'>
                Next step
              </button>
              {/* <button type='submit' className='form__btn btn-block'>
                Next step
              </button> */}
            </Form>
          )
        }
        }
      </Formik>
    </ >
  );
  };
