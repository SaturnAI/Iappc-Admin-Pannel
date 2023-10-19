import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Clients, Dashboard, MultiScreenLayout, LandingPage } from './pages'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LandingPage />} />

        <Route path='/dashboard' element={<MultiScreenLayout />} >
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/clients' element={<Clients />} />
        </Route>

        <Route path='*' element={<>Page Not found</>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
