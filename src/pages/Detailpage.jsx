import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Detailpage() {
  const [data, setdata] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const FetchApi = async () => {
      const Api = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d8d339a3367eef52270221ac27edf651`)

      setdata(Api.data)
    }

    FetchApi()
  }, [id])

  console.log(data)

  if (!data) {
    return (<div className="flex justify-center items-center h-screen bg-black">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
    </div>)
  }

  const bgImage = data.backdrop_path
    ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
    : `https://image.tmdb.org/t/p/original${data.poster_path}`

  return (
    <div>

      <div
        className="h-screen w-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute  "></div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-10">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {data.title}
            </h1>

            <p className="mb-4 text-gray-300">{data.overview}</p>

            <div className="flex gap-4 text-sm mb-6">
              <span>{data.release_date}</span>
              <span>{data.vote_average}⭐</span>
            </div>

            <div className="flex gap-4">
              <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg">
                ▶ Play
              </button>
              <button className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-lg">
                + My List
              </button>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Detailpage
