import React from 'react'
import { TopBannerSingle } from '../components/TopBannerSingle'
import img from '../assets/img/cards/medical-optional.png'


import { StepsForm } from '../components/StepsForm'

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
         <StepsMedical itemsStep={itemsStep}>
            'Form Medical facultativa'
         </StepsMedical>

      </>
   )
}
