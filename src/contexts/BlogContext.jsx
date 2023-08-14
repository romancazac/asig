import  { createContext, useEffect, useState } from 'react';
import { useAppServices } from '../services/appServices';
import { dataCompany } from '../utils/data';




export const BlogContext = createContext()

export const  BlogContextProvider = ({children}) => {
    
const {getArticles } = useAppServices();

const [articles, setArticles] = useState([]);



useEffect(() => {
  
   getArticles().then((data) => setArticles(data))

},[])


    return (
       <BlogContext.Provider value={{articles}}>
             {children}
       </BlogContext.Provider>
    );
}

