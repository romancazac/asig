import  { createContext, useEffect, useState } from 'react';
import { useAppServices } from '../services/appServices';
import { v4 as uuidv4 } from 'uuid';



export const FormContext = createContext()

export const  FormContextProvider = ({children}) => {
    
const {getCompany} = useAppServices();

const [company, setCompany] = useState([]);

useEffect(() => {

    getCompany().then((data) => setCompany(data))

},[])
    return (
       <FormContext.Provider value={{company}}>
             {children}
       </FormContext.Provider>
    );
}

