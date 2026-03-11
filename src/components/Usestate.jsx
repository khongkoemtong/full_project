import React, { useState } from 'react'
import Card from './Card'

function Usestate() {
    const [count, setcount] = useState(0)
    const [check ,setcheck]= useState("hello world ")
    const [found , setfound]= useState(false)

    


    let decrease = ()=>{
        if(count>0){
            setcount(count-1)
        }
        else{
            setcount(0)
        }
    }


    return (
        <div>
            <h1 className='text-center text-blue-200 font-bold text-3xl'>Usestate components</h1>


            <h1 className='text-center'>Number</h1>
            <h1 className='text-center text-3xl font-bold text-red-600' >{count}</h1>

            <div  className='flex gap-3.5 justify-center mt-3'>
                <button onClick={()=>{setcount(count+1)}} className='bg-amber-300 rounded-2xl px-[20px] py-[8px]'>increase</button>
                <button onClick={decrease} className='bg-amber-300 rounded-2xl px-[20px] py-[8px]'>decrease</button>
            </div>            
            <div className='mt-5'>
                <h1 className='text-center'>String</h1>
            <h1 className='text-center text-3xl font-bold text-red-600' >{check}</h1>

            <div  className='flex gap-3.5 justify-center mt-3'>
                <button  onClick={()=>{setcheck("hello bro")}}  className='bg-amber-300 rounded-2xl px-[20px] py-[8px]'>hello bro</button>
                <button onClick={()=>{setcheck("hello sis")}} className='bg-amber-300 rounded-2xl px-[20px] py-[8px]'>hello sis</button>
            </div>
            </div>



            <div className='mt-5'>
                <h1 className='text-center'>BOOLEAN</h1>
            <h1 className='text-center text-3xl font-bold text-red-600' >{found ? "hello":"hi"}</h1>

            <div  className='flex gap-3.5 justify-center mt-3'>
                <button  onClick={()=>{setfound(!found)}}   className='bg-amber-300 rounded-2xl px-[20px] py-[8px]'>change</button>
               
            </div>
            </div>


            <Card name={'jonh'} age={20} gender={'male'} email={'jonh@gmail.com'} image={'https://i.pinimg.com/736x/45/bc/49/45bc4905ca72e7554a91fe9a505b09ab.jpg'}/>








        </div>
    )
}

export default Usestate
