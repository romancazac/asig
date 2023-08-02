import React from 'react'
import {  useField } from 'formik';
import './style.scss'
export const CheckboxFormik = ({ children, ...props }) => {
   const [field, meta] = useField({ ...props, type: 'checkbox' });
   return (
      <>
         <label className="form__checkbox checkbox">
            <input className='checkbox__inp' type="checkbox" {...field} {...props} />
            <span>{children}</span>
         </label>
      </>
   );
}
