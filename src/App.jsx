import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Clients, Dashboard, MultiScreenLayout, LandingPage, AddVendor, AddCustomer, ContactInformation } from './pages'
import ProtectedRoute from './pages/ProtectedRoute'
import { useDispatch, useSelector } from 'react-redux'


const App = () => {

  const dispatch = useDispatch()
   
   const {isAuthenticated} = useSelector((state)=> state.LoginScreenSlice)
  

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}    />} >
          <Route path='/' element={<MultiScreenLayout />} >
            <Route index  element={<Dashboard />} />
            <Route path='clients' element={<Clients />} />
            <Route path='addvendor' element={<AddVendor />} />
            <Route path='addcustomer' element={<AddCustomer />} />
            <Route path='contactinfo' element={<ContactInformation />} />
          </Route>
        </Route>

        <Route path='/landing' element={<LandingPage />} />
        <Route path='*' element={<>Page Not found</>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
