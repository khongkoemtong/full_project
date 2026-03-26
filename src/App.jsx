import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navebar from './components/Navebar'
import Home from './pages/Home'
import StateProp from './pages/StateProp'
import NotFound from './pages/Notfound'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UseEfect from './pages/MyUseEfect'
import MyUseEfect from './pages/MyUseEfect'
import Json from './pages/Json'
import FetchApi from './pages/FetchApi'
import Card from './components/Card'
import Cart from './pages/Cart'


function WithoutNavbar() {
  
  return (
    <div>
      <Outlet />
    </div>
  )
}
function WithNavbar() {
  return (
    <div>
      <Navebar />
      <Outlet />

  
    </div>
  )

}


function App() {

  const [cart , setcart] = useState([])


  const myaddtocart  = (movie)=>{
    setcart([...cart,movie])
  }

  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route element={<WithNavbar />}>
            <Route path='/' element={<Home />} />
            <Route path='/state_prop' element={<StateProp />} />
            <Route path='/useeffect' element = {<MyUseEfect/>}/>
            <Route path='/json' element={<Json/>}/>
            <Route path='/fetch' element={<FetchApi addTocard={myaddtocart}/>}/>
            <Route path='/cart' element ={<Cart Mycart={cart}/>}/>
          </Route>

          <Route element={<WithoutNavbar />}>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound/>}/>
          </Route>


          <Route path='/dashboard' element={<Dashboard/>}/>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
