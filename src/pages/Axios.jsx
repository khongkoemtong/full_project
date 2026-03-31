import React, { useEffect, useState } from 'react'
import Usestate from '../components/Usestate'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Axios() {
    const [data, setdata] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const Api = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d8d339a3367eef52270221ac27edf651')
            setdata(Api.data.results)
        }
        fetchApi()

    }, [])

    console.log(data)


    return (
        <div className='grid grid-cols-4'>

            {
                data.map(movie => (
                    <div>

                     
                        <div class="flex justify-center items-center min-h-screen">
                            <div class="max-w-[720px] mx-auto">
                               

                             
                                <div class="relative flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                                    <div
                                        class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                            alt="card-image" />
                                    </div>
                                    <div class="p-6">
                                        <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                            {movie.title}
                                        </h5>
                                        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio"
                                            where you can enjoy the main night life in Barcelona.
                                        </p>
                                    </div>
                                    <div class="p-6 pt-0">
                                       <Link to={`/axios/${movie.id}`}>
                                        <button
                                            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                            type="button">
                                            {movie.vote_average} ⭐
                                        </button>
                                       </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }







        </div>
    )
}

export default Axios
