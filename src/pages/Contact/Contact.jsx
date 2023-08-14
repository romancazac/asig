import { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import { useAppServices } from '../../services/appServices';
import { FormContext } from '../../contexts/FormContext';
import { CheckboxFormik } from '../../components/CheckboxFormik';
import { Alert } from '../../components/Alert.jsx/index.jsx';

import './style.scss'
export const Contact = ({ itemsStep }) => {
   const { postComand, loading, succes, error } = useAppServices()





   const schemasContact = Yup.object().shape({

      name: Yup.string()
         .required('Acest câmp este obligatoriu'),

      email: Yup.string().email('Nu este valid')
         .required('Acest câmp este obligatoriu'),
      message: Yup.string()
         .required('Acest câmp este obligatoriu'),

      term: Yup.boolean().oneOf([true], 'Acceptati conditiile'),


   })





   const onSubmit = async (values, actions) => {

      await postComand(values);
      actions.resetForm();
   }


   return (
      <div className='contacts'>
         <div className="container contacts__form">
            <Formik
               initialValues={{
                  name: '',
                  email: '',
                  message: '',
                  term: false,

               }
               }
               validationSchema={schemasContact}
               onSubmit={onSubmit}
            >
               {() => (
                  <Form>
                     <div className="form__line">
                        <span className="form__label">Numele dvs.</span>
                        <Field
                           name='name'
                           className='form__input'

                        />
                        <ErrorMessage name='name' component="span" className='form__error' />
                     </div>
                     <div className="form__line">
                        <span className="form__label">Email</span>
                        <Field
                           name='email'
                           className='form__input'

                        />
                        <ErrorMessage name='email' component="span" className='form__error' />
                     </div>
                     <div className="form__line">
                        <span className="form__label">Mesaj</span>
                        <Field
                           name='message'
                           className='form__input'

                        />
                        <ErrorMessage name='message' component="span" className='form__error' />
                     </div>

                     <div className="form__line">

                        <CheckboxFormik name='term'>Sunt de acord cu termenii și condițiile asig.md și îmi exprim consimțământul pentru prelucrarea datelor cu caracter personal.</CheckboxFormik>
                        <ErrorMessage name='term' component="span" className='form__error' />

                     </div>


                     <button type='sumbit' className="btn-block">Trimiteti mesaj</button>
                     {succes && <Alert text="Mesaj transmis cu succes" icon="success" />}
                     {error && <Alert text="Eroare la transmiterea mesajului" icon="error" />}
                  </Form>
               )
               }

            </Formik>
         </div>


      </ div>
   );
};
