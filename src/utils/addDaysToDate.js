import {format, addDays} from 'date-fns'

export const addDaysToDate = (date, days) => {
   const calc = `
   ${format(date, 'dd.MM.yyyy')} - 
   ${format(addDays(date, days), 'dd.MM.yyyy')}
   `
   return calc
}