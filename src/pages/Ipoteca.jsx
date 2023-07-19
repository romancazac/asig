import React from 'react'
import { TopBannerSingle } from '../components/TopBannerSingle'
import img from '../assets/img/cards/real-estate.png'

import { StepsForm } from '../components/StepsForms'
import { FormMedical } from '../components/StepsMedical'

export const Ipoteca = () => {
   const itemsStep = [
      {  id:1,
         name:"Ipoteca"
      },
      {  id:2,
         name:"Contractor"
      },
      {  id:3,
         name:"Confirmare"
      }
   ]
   return (
      <>
         <TopBannerSingle
            img={img}
            title='Ipoteca'
            text='Pentru ipotecă și bunuri imobile gajate.'
            bg='cards__column_orange'
         />
         <StepsForm itemsStep={itemsStep}>
            'Form Ipoteca'
         </StepsForm>

      </>
   )
}
