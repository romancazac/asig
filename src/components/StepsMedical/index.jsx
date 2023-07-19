import { useContext, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { AsigCompany } from '../AsigCompany';
import { useAppServices } from '../../services/appServices';
import { MedicalStepOne } from '../MedicalStepOne';
import { MedicalStepTwo } from '../MedicalStepTwo';
import { MedicalStepThree } from '../MedicalStepThree';

import './style.scss';
import { FormContext } from '../../contexts/FormContext';


export const FormMedical = () => {
  const { postComand, loading } = useAppServices()
  const {step, setStep} = useContext(FormContext)

  const stepOneSchema = Yup.object().shape({
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
      birth: Yup.string()
        .min(10, 'Introduceţi data nașterii în formatul zz.ll.aaaa')
        .required('Data nașterii este obligatoriu'),
    })
    )

  })
  const stepTwoSchema = Yup.object().shape({

    personalInfo: Yup.array().of(Yup.object().shape({
      name: Yup.string()
        .required('Nume Prenume este obligatoriu'),
      passaport: Yup.string()
        .required('Numărul pașaportului este obligatoriu'),
      code: Yup.string()
        .min(10, 'Codul introdus nu este valid')
        .required('Acest câmp este obligatoriu'),
    })

    )
  })
  const stepThreeSchema = Yup.object().shape({

    phone: Yup.number().required('Acest câmp este obligatoriu')


  })

  const schemValidation = (step === 1 && stepOneSchema) || (step === 2 && stepTwoSchema) || (step === 3 && stepThreeSchema);


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

    await postComand(values);
    actions.resetForm()
    setStep(1)

  }

  return (
    <>
      <Formik
        initialValues={{
          country: [],
          multiple: false,
          startDate: new Date(),
          endDate: new Date(),
          daysAsig: '',
          scope: '',
          personalInfo: [{ birth: '', code: '', passaport: '', name: '', id: uuidv4() }],
          price: '',
          company: '',
          phone: '',
          email: ''
        }
        }
        validationSchema={schemValidation}
        onSubmit={onSubmit}
      >
        {({ errors, touched, values, isValid, validateForm, submitForm }) => {

          useEffect(() => {
            validateForm()
          }, [values]);
          return (
            <Form>


              {step === 1 && <MedicalStepOne errors={errors} touched={touched} values={values} />}
              {step === 2 && <MedicalStepTwo values={values} />}
              {step === 3 && <MedicalStepThree values={values} />}

              {isValid && step === 1 && <AsigCompany values={values} />}

              <div className="form__row">
                {
                  step > 1 &&
                  <button type='button' onClick={() => onPrevStep()} className='form__btn btn-block'>
                    Prev step
                  </button>
                }
                {
                  step < 3 ?
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


            </Form>
          )
        }
        }
      </Formik>
    </ >
  );
};
