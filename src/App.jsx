import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Clients, Dashboard, MultiScreenLayout, LandingPage, AddVendor, AddCustomer, ContactInformation } from './pages'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<MultiScreenLayout />} >
          <Route index element={<Dashboard />} />
          <Route path='clients' element={<Clients />} />
          <Route path='AddVendor' element={<AddVendor />} />
          <Route path='AddCustomer' element={<AddCustomer />} />
          <Route path='ContactInfo' element={<ContactInformation />} />
        </Route>

        <Route path='/landing' element={<LandingPage />} />
        <Route path='*' element={<>Page Not found</>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
