import { useContext} from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { AsigCompany } from '../AsigCompany';
import { useAppServices } from '../../services/appServices';

import { MedicalStepTwo } from './MedicalStepTwo';
import { MedicalStepThree } from './MedicalStepThree';
import { FormContext } from '../../contexts/FormContext';
import './style.scss';
import { MedicalStepOne } from './MedicalStepOne';
import { NavSteps } from '../NavSteps';


export const FormMedical = ({ itemsStep }) => {
  const { postComand, loading, error, succes } = useAppServices()
  const { step, setStep } = useContext(FormContext)

  const stepOneSchema = Yup.object().shape({
    multiple: Yup.boolean(),
    country: Yup.array().min(1, 'Selectați una sau mai multe țări'),
    daysAsig: Yup.string().when("multiple", {
      is: true,
      then: (stepOneSchema) => stepOneSchema.required('Selectați numărul de zile asigurate')
    }),
    startDate: Yup.string().required('Selctati începutul perioadei asigurate'),
    endDate: Yup.string().when("multiple", {
      is: false,
      then: (stepOneSchema) => stepOneSchema.required('Selectati sfârșitul perioadei asigurate'),
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

  const onSubmit = async (values) => {

    if (step < itemsStep.length) {
      setStep(prev => prev + 1)
    } else {
      await postComand(values);
    }
 

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
        {({ errors, touched, values, isValid}) => (

        
            <Form>


              {step === 1 && <MedicalStepOne errors={errors} touched={touched} values={values} />}
              {step === 2 && <MedicalStepTwo values={values} />}
              {step === 3 && <MedicalStepThree values={values} />}

              {
                isValid && step === 1 &&

                <AsigCompany
                  values={values}
                  form={'medical'}
                />

              }
              <NavSteps itemsStep={itemsStep} error={error} succes={succes} loading={loading} />
            </Form>
          
        )
        }
      </Formik>
    </ >
  );
};
