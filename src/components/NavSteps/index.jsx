import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'
import { Alert } from '../Alert.jsx';

export const NavSteps = ({ itemsStep, loading,succes,error }) => {
   const { step, setStep } = useContext(FormContext);
   const onPrevStep = () => setStep(prev => prev - 1);
   return (
      <div className="form__row form__row_footer">
         {
            step > 1 &&
            <button type='button' onClick={() => onPrevStep()} className='form__btn btn-block'>
               Prev step
            </button>
         }
         {

            <button type='submit' className='form__btn btn-block'>
               {
                  step < itemsStep.length ?
                     "Next step" :
                     <>
                        Submit
                        {loading && "Posted..."}
                     </>
               }

            </button>


         }
       {succes && <Alert text="Comanda plasată cu succes" icon="success" />}
      {error && <Alert text="Eroare la plasarea comenzii" icon="error" />}
      </div>
   )
}
