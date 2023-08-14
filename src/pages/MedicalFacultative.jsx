import React from 'react'
import { TopBannerSingle } from '../components/TopBannerSingle'
import img from '../assets/img/cards/medical-optional.png'


import { StepsForm } from '../components/StepsForm'
import { FormFacultative } from '../components/FormFacultative'

export const MedicalFacultative = () => {
   const itemsStep = [
      {
         id: 1,
         name: "Asigurare"
      },
      {
         id: 2,
         name: "Persoane"
      },
      {
         id: 3,
         name: "Confirmare"
      }
   ]
   return (
      <>
         <TopBannerSingle
            img={img}
            title='Medicala facultativă'
            text='Pentru nerezidenți, valabilă în Moldova.'
            bg='cards__column_pink'
         />
         <StepsForm itemsStep={itemsStep}>
            <FormFacultative itemsStep={itemsStep}/>
         </StepsForm>

      </>
   )
}
