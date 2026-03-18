import React, { useContext } from 'react'
import Usestate from '../components/Usestate'
import Navebar from '../components/Navebar'
import Card from '../components/Card'
import Rechat from './Rechat'
import { Mycontext } from '../usecontext/Createcontext'
import { products } from '../data/products'
import { users } from '../data/users'
function Home() {


  return (
    <div>


      <div className='grid grid-cols-5 gap-3.5'>
        {
          users.map(user=>(
            <div>
              <div class="bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer relative">
                    <div class="aspect-square rounded-full overflow-hidden mx-auto">
                        <img src={user.image} alt="product1"
                            class="h-full w-full object-cover object-top rounded-lg" />
                    </div>
                    <div class="mt-3 text-center">
                        <h4 class="text-slate-900 text-sm font-semibold">{user.name}</h4>
                    </div>
                </div>
            </div>
          ))
        }
      </div>

     <div className='grid grid-cols-4 gap-2'>
      {
        products.map(pro => (
          <div>
                  <div class="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
                    <a href="javascript:void(0)" class="block">
                      <div class="aspect-[12/11] bg-gray-100 rounded-lg p-4">
                        <img src={pro.image} alt="Product 3"
                          class="w-full h-full object-contain" />
                      </div>

                      <div class="flex gap-2 mt-4">
                        <h5 class="text-base font-semibold text-slate-900">{pro.name}</h5>
                        <h6 class="text-base text-slate-900 font-bold ml-auto">${pro.price}</h6>
                      </div>
                      <p class="text-slate-600 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </a>
                    <div class="flex items-center gap-2 mt-6">
                      <div
                        class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"></path>
                        </svg>
                      </div>
                      <button type="button" class="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Add to cart</button>
                    </div>
                  </div>

                </div>
              
            
        ))
      }
      </div>


      <h1 className='en'>Home</h1>

      <div>
        <h1 className='kh'>សួស្តី</h1>
      </div>
      <Rechat />




    </div>
  )
}

export default Home
