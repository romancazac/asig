import  { createContext, useEffect, useState } from 'react';
import { useAppServices } from '../services/appServices';
import { dataCompany } from '../utils/data';




export const FormContext = createContext()

export const  FormContextProvider = ({children}) => {
    
const {getCompany } = useAppServices();

const [company, setCompany] = useState([]);
const [step, setStep] = useState(1);


useEffect(() => {
  
    getCompany().then((data) => setCompany(data))

},[])


    return (
       <FormContext.Provider value={{company:dataCompany,step, setStep}}>
             {children}
       </FormContext.Provider>
    );
}

