import React, { useContext } from 'react'
import { MovieContext } from '../MovieContext'


const imgPath= 'https://image.tmdb.org/t/p/w500'

const Banner = () => {
    const { selectMovie} = useContext(MovieContext) 
  return (
    <div className='banner' style={{backgroundImage: `url(${imgPath}${selectMovie.backdrop_path})`, height:'70vh', objectFit:'cover', backgroundRepeat:'no-repeat' , backgroundSize:'cover', backgroundPosition:'center'}}>
      <div>
        <h1>{selectMovie.title}</h1>
        <p>{selectMovie.overview}</p>
      </div>
    </div>
  )
}

export default Banner
