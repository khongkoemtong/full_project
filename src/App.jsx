import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navebar from './components/Navebar'
import Home from './pages/Home'
import StateProp from './pages/StateProp'

function App() {
  return (
    <>

     <BrowserRouter>
     <Navebar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='state_prop' element={<StateProp/>}/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
     </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
