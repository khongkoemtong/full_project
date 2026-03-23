import React, { useEffect, useState } from 'react'

function Json() {
    const [data, setdata] = useState([])
    const [search ,setsearch] = useState("")
    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch('http://localhost:3000/products')
            const req = await res.json()
            setdata(req)
        }
        fetchApi()
    })
    const searchData = data.filter(product=>{
        return product.name.toLowerCase().includes(search.toLowerCase())
    })
    
    return (
        <div>

            <div className='flex justify-center'>


            </div>


            <div className='flex justify-center'>
                <input type="text" 
                onChange={(e)=>{setsearch(e.target.value)}} 
                className='bg-amber-400' />
            </div>


            <div className='grid grid-cols-4'>
            {
                searchData.map(product => (
                    <div
                        class="bg-white border border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                        <div class="aspect-[3/2]">
                            <img src={product.image} class="w-full h-full object-cover" alt="Card image" />
                        </div>

                        <div class="p-6">
                            <h3 class="text-slate-900 text-xl font-semibold">{product.name}</h3>
                            <p class="mt-3 text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
                                arcu,
                                at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                                at fermentum dui. Maecenas.
                            </p>
                            <button type="button"
                                class="mt-6 px-6 py-2.5 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 cursor-pointer">View</button>
                        </div>
                    </div>
                ))
            }
            </div>

        </div>
    )
}

export default Json
