import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import Footer from '../../core/common/Footer'
import { HomepageBanner } from './pages/HomepageBanner'
import HomepageNavbar from '../../core/common/HomepageNavbar'
import { HomepageRequestForm } from './pages/RequestForm'



export const HomepageRoutes=[
  <Route index element={<HomepageBanner/>}/>,
  <Route path="/request-form" element={<HomepageRequestForm/>}/>,

]


export  function HomePageOutlet() {
  return (
    <>
        <HomepageNavbar/>
        <Outlet/>
        <Footer/>
    
    </>
  )
}

