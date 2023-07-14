import React from 'react'
import Select from 'react-select';
export const MultiSelect = ({
  field,
  form,
  options,
  errorClass,
  isMulti = false,
  placeholder = 'Select'
}) => {
  function onChange(option) {
      form.setFieldValue(
          field.name,
          option ? (option).map((item) => item.value) : [],
      );
  }

  const getValue = () => {
      if (options) {
          return isMulti
              ? options.filter((option) => field.value.indexOf(option.value) >= 0)
              : options.find((option) => option.value === field.value);
      } else {
          return isMulti ? [] : ('');
      }
  };

  if (!isMulti) {
      return (
          <Select
              options={options}
              name={field.name}
              className={`form__select ${errorClass} `}
              value={options ? options.find(option => option.value === field.value) : ''}
              onChange={(option) => form.setFieldValue(field.name, option.value)}
              onBlur={field.onBlur}
              placeholder={placeholder}
          />
      )
  } else {
      return (
          <Select
              className={`form__select ${errorClass} `}
              classNamePrefix="react-select"
              name={field.name}
              value={getValue()}
              onChange={onChange}
              options={options}
              isMulti={true}
              placeholder={placeholder}
          />
      )
  }
}