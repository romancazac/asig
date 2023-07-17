import React from 'react'
import './style.scss'
import { Spoller } from '../Spoller'
import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'
import { ItemOption } from '../ItemOption'
export const AsigCompany = ({values}) => {

  const { company } = useContext(FormContext)

  return (

    <>
      {
        company?.map((item) =>

          <Spoller key={item.id} title={item.name} {...item} company={true} values={values}>
            <ul className="spoller__list">
              {
                item?.options.map((option, i) =>

                  <ItemOption key={i} name={option.name} include={option.include} />
                )
              }
            </ul>

          </Spoller>

        )

      }


    </>

  )


}
