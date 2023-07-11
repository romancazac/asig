import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {

   return (
      <div className="wrapper">
        <Header />      
        <main className="main">
           <Outlet/> 
        </main>
        <Footer/>
      </div>
    )
  
  
}
