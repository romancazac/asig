// import { useContext, useEffect } from 'react';
// import { Formik, Form, } from 'formik';
// import * as Yup from 'yup';
// import { useAppServices } from '../../services/appServices';
// import { FormContext } from '../../contexts/FormContext';
// import { GreenCardStepOne } from '../FormGreenCard/GreenCardStepOne';
// import { GreenCardStepTwo } from '../FormGreenCard/GreenCardStepTwo';
// import { Alert } from '../Alert.jsx';


// export const FormRca = () => {
//   const { postComand, loading } = useAppServices()
//   const { step, setStep } = useContext(FormContext)

//   const stepOneSchema = Yup.object().shape({
//     country: Yup.object()
//       .shape({
//         name: Yup.string().required('Alege zona de deplasare'),
//       }),

//     asigurant: Yup.string()
//       .min(13, 'Codul introdus nu este valid')
//       .max(13, 'Codul introdus nu este valid')
//       .required('Acest câmp este obligatoriu'),
//     numberCertificat: Yup.string()
//       .min(10, 'Nr. certificat de înmatriculare invalid')
//       .max(10, 'Nr. certificat de înmatriculare invalid')
//       .required('Acest câmp este obligatoriu'),
//     startDate: Yup.string().required('Selctati începutul perioadei asigurate'),
//     daysAsig: Yup.string().required('Selectați numărul de zile asigurate'),
//     term: Yup.boolean().oneOf([true], 'Acceptati conditiile')
//     ,

//   })

//   const stepTwoSchema = Yup.object().shape({
//     phone: Yup.number().required('Acest câmp este obligatoriu')
//   })
//   const schemValidation = (step === 1 && stepOneSchema) || (step === 2 && stepTwoSchema);


//   const onNextStep = (valid) => valid && setStep(prev => prev + 1);
//   const onPrevStep = () => setStep(prev => prev - 1);
    
//   const onSubmit = async (values, actions) => {
//     try {
//       await postComand(values);
//       Alert('Comanda plasata', 'success')
//     } catch (error) {
//       Alert('Eroare la plasarea comenzii', 'error');
//       console.log(error)
//     }
//   }


//   return (
//     <>

//       <Formik
//         initialValues={{
//           country: { "name": '' },
//           asigurant: '',
//           numberCertificat: '',
//           startDate: new Date(),
//           daysAsig: '',
//           term: false,
//           price: '',
//           phone: '',

//         }
//         }
//         validationSchema={schemValidation}
//         onSubmit={onSubmit}
//       >
//         {({  values, isValid, validateForm, submitForm }) => {

//           useEffect(() => {
//             validateForm()
//           }, [values]);
//           return (
//             <Form>

//               {step === 1 && <GreenCardStepOne values={values} isValid={isValid} />}
//               {step === 2 && <GreenCardStepTwo values={values} isValid={isValid} />}
//               <div className="form__row form__row_footer">
//                 {
//                   step > 1 &&
//                   <button type='button' onClick={() => onPrevStep()} className='form__btn btn-block'>
//                     Prev step
//                   </button>
//                 }
//                 {
//                   step < 2 ?
//                     <button type='button' onClick={() => onNextStep(isValid, submitForm)} className='form__btn btn-block'>
//                       Next step
//                     </button>
//                     :
//                     <button type='submit' className='form__btn btn-block'>
//                       Submit
//                       {loading && "Posted..."}
//                     </button>

//                 }

//               </div>
//             </Form>
//           )
//         }
//         }
//       </Formik>
//     </ >
//   );
// };
