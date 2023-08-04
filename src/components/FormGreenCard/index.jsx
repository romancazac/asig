import { useContext, useEffect } from 'react';
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import { useAppServices } from '../../services/appServices';
import { FormContext } from '../../contexts/FormContext';
import { GreenCardStepOne } from './GreenCardStepOne';
import { GreenCardStepTwo } from './GreenCardStepTwo';
import { Alert } from '../Alert.jsx';
import './style.scss';
import { NavSteps } from '../NavSteps';

export const FormGreenCard = ({ itemsStep }) => {
  const { postComand, loading,succes, error } = useAppServices()
  const { step, setStep } = useContext(FormContext)




  const stepOneSchemas = Yup.object().shape({
    country: Yup.object()
      .shape({
        name: Yup.string().required('Alege zona de deplasare'),
      }),

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

  })

  const stepTwoSchemas = Yup.object().shape({
    phone: Yup.number().required('Acest câmp este obligatoriu')
  })
  const schemValidations = (step === 1 && stepOneSchemas) || (step === 2 && stepTwoSchemas);



 

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
          country: { "name": '' },
          asigurant: '',
          numberCertificat: '',
          startDate: new Date(),
          daysAsig: '',
          term: false,
          price: '',
          phone: '',

        }
        }
        validationSchema={schemValidations}
        onSubmit={onSubmit}
      >
        {({  values, isValid}) => (
            <Form>

              {step === 1 && <GreenCardStepOne values={values} isValid={isValid} />}
              {step === 2 && <GreenCardStepTwo values={values} isValid={isValid} />}
              <NavSteps itemsStep={itemsStep} loading={loading} succes={succes} error={error}/>
            </Form>
          )
        }
       
      </Formik>
    </ >
  );
};
