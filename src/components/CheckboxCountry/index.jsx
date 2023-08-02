import React from 'react'
import { useFormikContext } from 'formik';
export const CheckboxCountry = ({ ...props}) => {
   const formik = useFormikContext();
   return (

      <label className="form__check form__input" htmlFor={props.id}>
     
         <input
            type="radio"
            {...props}
            onChange={
               (e) => {
                  formik.setFieldValue('country', {"value":e.target.value,"name":props.title}),
                  console.log(e.target.value);
               }}
         />
         {props.title}
      </label>

   )
}
