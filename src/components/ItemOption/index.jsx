import React from 'react'

import './style.scss'
export const ItemOption = ({name, include}) => {
  return (
    <li className={`spoller__item ${!include ? '_uncheck' : ''}`}>{name}</li>
  )
}
