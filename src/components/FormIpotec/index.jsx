import { useContext, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { AsigCompany } from '../AsigCompany';
import { useAppServices } from '../../services/appServices';

import { IpotecStepTwo } from './IpotecStepTwo';
import { IpotecStepThree } from './IpotecStepThree';
import { FormContext } from '../../contexts/FormContext';

import { IpotecStepOne } from './IpotecStepOne';
import { NavSteps } from '../NavSteps';


export const FormIpotec = ({ itemsStep }) => {
   const { postComand, loading, error, succes } = useAppServices()
   const { step, setStep } = useContext(FormContext)

   const stepOneSchema = Yup.object().shape({
      type: Yup.string().required('Selectați tipul imobil'),
      base: Yup.string().required('Selectați in baza la...'),
      valoare: Yup.number().required('Introduce valoare de piata'),
      startDate: Yup.string().required('Selctati începutul perioadei asigurate'),
      daysAsig: Yup.string().required('Selectați numărul de zile asigurate'),
      organization: Yup.string().required('Selectați numărul de zile asigurate'),


   })
   const stepTwoSchema = Yup.object().shape({
      codeCadastru: Yup.string()
         .min(10, 'Codul introdus nu este valid').max(10, 'Codul introdus nu este valid')
         .required('Introduce numarul cadastral'),
      personalInfo: Yup.object().shape({
         name: Yup.string()
            .required('Nume Prenume este obligatoriu'),
         passaport: Yup.string()
            .required('Serie/Număr buletin de identitate este obligatoriu'),
         code: Yup.string()
            .min(10, 'Codul introdus nu este valid')
            .required('Acest câmp este obligatoriu'),
         adress: Yup.string()
            .required('Adresa de domiciliu este obligatoriu'),
      })

     
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
               type: '',
               base: '',
               valoare: '',
               startDate: new Date(),
               daysAsig: '',
               organization: '',
               codeCadastru: '',
               acoperire: false,
               risc: [],
               personalInfo: {
                  name: '',
                  birth: '',
                  code: '',
                  passaport: '',
                  adress: ''
               },

               company: '',
               phone: '',
               email: '',
               price: '',
            }
            }
            validationSchema={schemValidation}
            onSubmit={onSubmit}
         >
            {({ errors, touched, values, isValid, validateForm }) => {

               useEffect(() => { validateForm() }, [])
               return (


                  <Form>


                     {step === 1 && <IpotecStepOne errors={errors} touched={touched} values={values} />}
                     {step === 2 && <IpotecStepTwo values={values} />}
                     {step === 3 && <IpotecStepThree values={values} />}

                     {
                        isValid && step === 1 &&

                        <AsigCompany
                           values={values}
                           form={'greenCard'}
                        />

                     }
                     <NavSteps itemsStep={itemsStep} error={error} succes={succes} loading={loading} />
                  </Form>

               )
            }}
         </Formik>
      </ >
   );
};
