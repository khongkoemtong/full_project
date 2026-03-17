import React, { use, useEffect, useState } from 'react'


function MyUseEfect() {
  const [data,setdata] = useState([])
  const [count ,setcount ]= useState(0)
  const [check ,setcheck] = useState(0)

  useEffect (()=>{
    console.log("hello world " ,count,check)
  }, [] )

  return (
    <div>
      <div className='flex justify-center gap-5'>
        <button onClick={()=>{setcount(count+1)}}>count</button>
        <button onClick={()=>{setcheck(check+1)}}>Check</button>
      </div>
    </div>
  )
}

export default MyUseEfect
