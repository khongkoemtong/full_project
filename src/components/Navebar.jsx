import React from 'react'
import { Link } from 'react-router-dom'

function Navebar() {
  return (
    <div>
      
      <nav className='shadow flex justify-between px-[50px] items-center'>
        <div>
            <img width={'80px'} src="/public/image.png" alt="" />
        </div>

        <div className='flex gap-[30px]'>
            <Link to={'/'}>Home</Link>
            <Link to={'/state_prop'}>Stat and prop</Link>
            <Link to={'/useeffect'}>UseEffect</Link>
            <Link>Contact us</Link>
            <Link to={'/fetch'}>FetchApi</Link>
            <Link to={'/cart'}>Cart</Link>
        </div>

        <div className='flex gap-[30px]'>
           <Link to={'/login'}> <button className='shadow px-[20px] py-[6px] rounded-[5px]'>LOGIN</button></Link>
            <button className='shadow px-[20px] py-[6px] rounded-[5px]' >REGISTER</button>
        </div>



      </nav>

    </div>
  )
}

export default Navebar
