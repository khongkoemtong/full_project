import React, { useContext } from 'react'
import Usestate from '../components/Usestate'
import Navebar from '../components/Navebar'
import Card from '../components/Card'
import Rechat from './Rechat'
import { Mycontext } from '../usecontext/Createcontext'

function Home() {
  const mydata = useContext(Mycontext)

  return (
    <div>


       <h1 className='en'>Home</h1>

       <div>
        <h1 className='kh'>សួស្តី</h1>
       </div>
        <Rechat/>


        {
          mydata.map(e=>(
            <div>
             {e.name}
            </div>
          ))
        }
      
    </div>
  )
}

export default Home
