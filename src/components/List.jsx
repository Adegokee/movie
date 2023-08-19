import React, {useContext, useEffect} from 'react'
import { MovieContext } from '../MovieContext'
import Item from './Item'





const key = "/movie?api_key=bf5595cb127233997340c64248b9a09a&query="
const imgPath= 'https://image.tmdb.org/t/p/w500'
// const url= 'https://api.themoviedb.org/3/movie/157336/videos?api_key=bf5595cb127233997340c64248b9a09a'
const url = 'https://api.themoviedb.org/3/'
// search/movie?api_key=bf5595cb127233997340c64248b9a09a&query=lost'



const List = () => {
const {movie, setMovie, mySearch, setSelectMovie}=useContext(MovieContext)


useEffect(() => {
  const type = mySearch ? 'search' : 'discover' ;
  const getMovie = async () => {
    const response  = await fetch(`${url}${type}${key}${mySearch}`);
    const data = await response.json()
    setMovie(data.results)
   setSelectMovie(data.results[0])

 
    console.log(movie)

  }
  getMovie()
  //   setInterval(() => {
  //   const randomIndex = Math.floor(Math.random() * movie.results.length - 1);
  //   setSelectMovie(randomIndex);
  // }, 1000);
 
  
}, [setMovie, movie, setSelectMovie, mySearch])



  return (
    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
      {movie.map((x) => (
        <Item key={x.id} x={x} />
      ))}
    </div>
  )
}

export default List

