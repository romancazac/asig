import React from 'react'
import { TopBannerSingle } from '../components/TopBannerSingle'
import img from '../assets/img/cards/car1.png'

import { StepsForm } from '../components/StepsForm'
import { FormGreenCard } from '../components/FormGreenCard'


export const GreenCard = () => {
   const itemsStep = [
      {
         id: 1,
         name: "Asigurare"
      },
      {
         id: 2,
         name: "Confirmare"
      }
   ]
   return (
      <>
         <TopBannerSingle
            img={img}
            title='Carte Verde'
            text='Pentru vehicule înmatriculate în Moldova, valabilă peste hotare.'
            bg='cards__column_green'
         />
         <StepsForm itemsStep={itemsStep}>
            <FormGreenCard/>
         </StepsForm>

      </>
   )
}
