import React from 'react'
import { TopBannerSingle } from '../components/TopBannerSingle'
import img from '../assets/img/cards/car2.png'

import { StepsForm } from '../components/StepsForms'


export const Rca = () => {
   const itemsStep = [
      {  id:1,
         name:"Asigurare"
      },
      {  id:2,
         name:"Confirmare"
      }
   ]
   return (
      <>
         <TopBannerSingle
            img={img}
            title='RCA'
            text='Pentru vehicule înmatriculate în Moldova.'
            bg='cards__column_blue'
         />
         <StepsForm itemsStep={itemsStep}>
            'Form Rca'
         </StepsForm>

      </>
   )
}
