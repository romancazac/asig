import React from 'react'
import { NumberFormatBase } from 'react-number-format';
import { useField } from "formik";
export const InputFormat = ({ name = "", ...props }) => {


  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;


  const format = (val) => {
    if (val === '') return '';
    const day = val.substring(0, 2);
    let month = val.substring(2, 4);
    const year = val.substring(4, 8);

    if (month.length === 1 && month[0] > 1) {
      month = `0${month[0]}`;
    } else if (month.length === 2) {
      // set the lower and upper boundary
      if (Number(month) === 0) {
        month = `01`;
      } else if (Number(month) > 12) {
        month = '12';
      }
    }

    return `${day}.${month}.${year}`;
  };


  return (

    <NumberFormatBase
      {...props}
      {...field}
      value={value}
      format={format}
      onValueChange={(value) => {
        setValue(name, value);
      }}
      placeholder="Data nasterii pers. asigurate"
      className='form__input picker'
    
    />

  )
}
