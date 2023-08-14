import React, { useState } from 'react'
import { useFormikContext } from 'formik';
import './style.scss'


import { differenceInDays } from 'date-fns';
export const Spoller = ({ title, children, name, form, option, price, values, className = null }) => {
   const [open, setOpen] = useState(false);
   let classLogo = '';

   const formik = useFormikContext();
   switch (name) {
      case "Intact":
         classLogo = "logo intact"
         break;
      case "Transelit":
         classLogo = "logo  transelit"
         break;
      case "General":
         classLogo = "logo general"
         break;
      case "Donaris":
         classLogo = "logo donaris"
         break;
      default:
         classLogo = ""

   }
   const calculateDays = () => {
      // Construiește obiecte Date pentru datele furnizate
      let startDate = new Date(values?.startDate)
      let targetDate = new Date(values?.endDate)
      // Calculează diferența în zile între cele două date
      const daysDifference = differenceInDays(targetDate, startDate);

      return daysDifference;
   }
   const days = values?.multiple ? values?.daysAsig : calculateDays();
   const calcMedical = () => {
      return ((days * price) * values?.personalInfo?.length).toFixed(2)
   }
   const calcGreencard = () => {
      return (price * values.daysAsig).toFixed(2)
   }

   const valueTotal = (form === 'medical' && calcMedical()) || (form === 'greenCard' && calcGreencard())

   return (
      <div className={`quati__spoller spoller ${className}`}>
         <div className="spoller__body">
            <div className={`spoller__row ${option ? 'spoller__row_company' : ''}`}>
               {
                  option &&
                  <>
                     <input
                        type="radio"
                        name="price"
                        id={name}
                        checked={values.company === name ? true : false}
                        onChange={
                           (e) => {
                              formik.setFieldValue("price", e.target.value)
                              formik.setFieldValue("company", name)
                           }}
                        placeholder={title}
                        value={valueTotal}
                     />
                     <label htmlFor={name} className={`spoller__logo ${classLogo}`} >{name}</label>
                     {form === 'greenCard' && calcGreencard()}
                     {form === 'medical' && calcMedical()}  Euro


                  </>
               }

               <button
                  type='button'
                  onClick={() => setOpen(!open)}
                  className={`spoller__btn ${open ? "_active" : ''}`}>
                  <span>{!option && title}</span>
               </button>



            </div>

            {
               open &&
               <div className="spoller__content">
                  {children}
               </div>
            }

         </div>

      </div>
   )
}
