import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import ReferralForm from './pages/referralform/ReferralForm'
import Contact from './pages/contact/Contact'
import NavBar from './globalComponent/navbar/NavBar'
import AppLayout from './globalComponent/layout/AddLayout'
import SupportCoordination from './pages/services/pages/SupportCoordination'
import SupportInDependLive from './pages/services/pages/SupportInDependLive'
import InHomeSupport from './pages/services/pages/InHomeSupport'
import ShortTerm from './pages/services/pages/ShortTerm'
import MediumTerm from './pages/services/pages/MediumTerm'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
       element : <AppLayout/>,
       children:[
        
           {
      path:'/',
       element : <Home/>
    },

      {
      path:'/about',
       element : <About/>
    },
     {
      path:'/services',
       element : <Services/>
    },
     {
      path:'/referralform',
       element : <ReferralForm/>
    },
     {
      path:'/contact',
       element : <Contact/>
    },
     {
      path:'/services/supportcoordination',  
       element : <SupportCoordination/>
    },
     {
      path:'/services/supportindependlive',
       element : <SupportInDependLive/>
    },
     {
      path:'/services/inhomesupport',
       element : <InHomeSupport/>
    },
     {
      path:'/services/shortterm',
       element : <ShortTerm/>
    },
     {
      path:'/services/mediumterm',
       element : <MediumTerm/>
    },
        
       ]
    },
     
  ]);


  return (
    <>
    <RouterProvider router={router}/>
  
    </>
  )
}

export default App
