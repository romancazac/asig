import  { createContext, useEffect, useState } from 'react';



export const FormContext = createContext()

export const  FormContextProvider = ({children}) => {
    


useEffect(() => {

    

},[])
    return (
       <FormContext.Provider value={{}}>
             {children}
       </FormContext.Provider>
    );
}

