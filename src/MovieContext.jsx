import React, {createContext, useState} from 'react'

export const MovieContext =createContext()
const MovieReview = ({children}) => {
    const[movie, setMovie] = useState([])
    const [mySearch, setMySearch] = useState('')
    const [selectMovie, setSelectMovie] = useState('')

  return (
    <MovieContext.Provider value={{movie, setMovie, mySearch, setSelectMovie, selectMovie, setMySearch}}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieReview
