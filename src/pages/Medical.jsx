import React from 'react'
import { TopBannerSingle } from '../components/TopBannerSingle'
import img from '../assets/img/cards/medical.png'

import { StepsForm } from '../components/StepsForm'
import { FormMedical } from '../components/FormMedical'

export const Medical = () => {
   const itemsStep = [
      {
         id: 1,
         name: "Călătorie"
      },
      {
         id: 2,
         name: "Persoane"
      },
      {
         id: 3,
         name: "Confirmare"
      },
   ]
   return (
      <>
         <TopBannerSingle
            img={img}
            title='Medicală pentru călătorii'
            text='Asigurare medicală pentru călătorii în străinătate. Alege teritoriul asigurat, tipul de călătorie, perioada de valabilitate a poliței, suma asigurată și riscurile suplimentare, inclusiv COVID-19.'
            bg='cards__column_medical'
         />
         <StepsForm itemsStep={itemsStep}>
            <FormMedical />
         </StepsForm>

      </>
   )
}
