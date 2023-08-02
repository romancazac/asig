import { useContext, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { AsigCompany } from '../AsigCompany';
import { useAppServices } from '../../services/appServices';
import { MedicalStepOne } from '../MedicalStepOne';
import { MedicalStepTwo } from '../MedicalStepTwo';
import { MedicalStepThree } from '../MedicalStepThree';

import { FormContext } from '../../contexts/FormContext';
import { CheckboxCountry } from '../CheckboxCountry';
import { dataContrysGreenCard, dataMonth } from '../../utils/data';
import './style.scss';
import { DatePickerFormik } from '../../DatePickerFormik';
import { CheckboxFormik } from '../CheckboxFormik';
import { MultiSelect } from '../MultiSelect/MultiSelect';
import { Confirme } from '../Confirme';
import { format, addDays } from 'date-fns'
import { GreenCardStepOne } from './GreenCardStepOne';
import { GreenCardStepTwo } from './GreenCardStepTwo';

export const FormGreenCard = () => {
  const { postComand, loading } = useAppServices()
  const { step, setStep } = useContext(FormContext)

  const stepOneSchema = Yup.object().shape({
    // country: Yup.string().required("Selectati zona de deplasare"),
    asigurant: Yup.string()
      .min(13, 'Codul introdus nu este valid')
      .max(13, 'Codul introdus nu este valid')
      .required('Acest câmp este obligatoriu'),
    numberCertificat: Yup.string()
      .min(10, 'Nr. certificat de înmatriculare invalid')
      .max(10, 'Nr. certificat de înmatriculare invalid')
      .required('Acest câmp este obligatoriu'),
    startDate: Yup.string().required('Selctati începutul perioadei asigurate'),
    daysAsig: Yup.string().required('Selectați numărul de zile asigurate'),
    term: Yup.boolean().oneOf([true], 'Acceptati conditiile')
    ,

    // daysAsig: Yup.string().when("multiple", {
    //   is: true,
    //   then: (stepOneSchema) => stepOneSchema.required('Selectați numărul de zile asigurate')
    // }),
    // startDate: Yup.string().required('Selctati începutul perioadei asigurate'),
    // endDate: Yup.string().when("multiple", {
    //   is: false,
    //   then: (stepOneSchema) => stepOneSchema.required('Selectati sfârșitul perioadei asigurate'),
    // }),
    // scope: Yup.string().required('Selectati scopul calatoriei'),
    // personalInfo: Yup.array().of(Yup.object().shape({
    //   birth: Yup.string()
    //     .min(10, 'Introduceţi data nașterii în formatul zz.ll.aaaa')
    //     .required('Data nașterii este obligatoriu'),
    // })
    // )

  })
  // const stepTwoSchema = Yup.object().shape({

  //   personalInfo: Yup.array().of(Yup.object().shape({
  //     name: Yup.string()
  //       .required('Nume Prenume este obligatoriu'),
  //     passaport: Yup.string()
  //       .required('Numărul pașaportului este obligatoriu'),
  //     code: Yup.string()
  //       .min(10, 'Codul introdus nu este valid')
  //       .required('Acest câmp este obligatoriu'),
  //   })

  //   )
  // })
  // const stepThreeSchema = Yup.object().shape({

  //   phone: Yup.number().required('Acest câmp este obligatoriu')


  // })

  // const schemValidation = (step === 1 && stepOneSchema) || (step === 2 && stepTwoSchema) || (step === 3 && stepThreeSchema);


  const onNextStep = (valid, submitForm) => {

    if (valid) {
      setStep(prev => prev + 1);
    } else {
      submitForm();
    }
  };
  const onPrevStep = () => {
    setStep(prev => prev - 1)
  }

  const onSubmit = async (values, actions) => {
    console.log(values);
    await postComand(values);
    actions.resetForm()
    setStep(1)

  }


  return (
    <>
      <Formik
        initialValues={{
          country: {},
          asigurant: '',
          numberCertificat: '',
          startDate: new Date(),
          daysAsig: '',
          term: false,
          price:''
        }
        }
        validationSchema={stepOneSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, values, isValid, validateForm, submitForm }) => {

          useEffect(() => {
            validateForm()
          }, [values]);
          return (
            <Form>

              {step === 1 && <GreenCardStepOne values={values} isValid={isValid}/>}
              {step === 2 && <GreenCardStepTwo values={values} isValid={isValid}/>}
              <div className="form__row form__row_footer">
                {
                  step > 1 &&
                  <button type='button' onClick={() => onPrevStep()} className='form__btn btn-block'>
                    Prev step
                  </button>
                }
                {
                  step < 2 ?
                    <button type='button' onClick={() => onNextStep(isValid, submitForm)} className='form__btn btn-block'>
                      Next step
                    </button>
                    :
                    <button type='submit' className='form__btn btn-block'>
                      Submit
                      {loading && "Posted..."}
                    </button>

                }

              </div>

              <button type='submit'>ok</button>
            </Form>
          )
        }
        }
      </Formik>
    </ >
  );
};
