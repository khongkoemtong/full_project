import React, { useContext } from 'react'
import { Mycontext } from './Createcontext'

function Usecontext() {
    const data = useContext(Mycontext)
  return (
    <div>

        {

            data.map(e=>(
                <div>
                    id : {e.id} <br />
                    Name : {e.name} <br />
                    gender : {e.gender} <br />
                </div>
            ))
            
        }
      
    </div>
  )
}

export default Usecontext
