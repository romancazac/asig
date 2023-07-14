import React from 'react'
import { useField } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './style.scss'
export const DatePickerFormik = ({  name = "", ...props }) => {


  const [field, meta, helpers] = useField(name);

  const { value} = meta;
  const { setValue } = helpers;

  return (

    <DatePicker
    {...props}
    {...field}
    selected={value}
    onChange={(date) => setValue(date)}
 
    dateFormat="dd.MMM.yyyy"

    />
  )
}
