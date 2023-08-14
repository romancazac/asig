import { useContext, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { AsigCompany } from '../AsigCompany';
import { useAppServices } from '../../services/appServices';

import { FacStepTwo } from './FacStepTwo';
import { FacStepThree } from './FacStepThree';
import { FormContext } from '../../contexts/FormContext';

import { FacStepOne } from './FacStepOne';
import { NavSteps } from '../NavSteps';


export const FormFacultative = ({ itemsStep }) => {
   const { postComand, loading, error, succes } = useAppServices()
   const { step, setStep } = useContext(FormContext)

   const stepOneSchema = Yup.object().shape({
      country: Yup.string().required('Selectați tara de resedinta'),
      startDate: Yup.string().required('Selctati începutul perioadei asigurate'),
      daysAsig: Yup.string().required('Selectați numărul de zile asigurate'),
      risc: Yup.array().min(1, 'Selectați factorii de risc'),

      personalInfo: Yup.object().shape({
         birth: Yup.string()
            .min(10, 'Introduceţi data nașterii în formatul zz.ll.aaaa')
            .required('Data nașterii este obligatoriu'),
      })
      

   })
   const stepTwoSchema = Yup.object().shape({

      personalInfo: Yup.object().shape({
         name: Yup.string()
            .required('Nume Prenume este obligatoriu'),
         passaport: Yup.string()
            .required('Numărul pașaportului este obligatoriu'),
         code: Yup.string()
            .min(10, 'Codul introdus nu este valid')
            .required('Acest câmp este obligatoriu'),
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
               country: '',
               startDate: new Date(),
               daysAsig: '',
               acoperire: false,
               risc: [],
               personalInfo: {
                  name: '',
                  birth:'',
                  code:'',
                  passaport:''
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


                     {step === 1 && <FacStepOne errors={errors} touched={touched} values={values} />}
                     {step === 2 && <FacStepTwo values={values} />}
                     {step === 3 && <FacStepThree values={values} />}

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
