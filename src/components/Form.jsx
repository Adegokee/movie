import React, {useContext, useState} from 'react'
import { MovieContext } from '../MovieContext'

const Form = () => {
    const [film, setFilm] = useState('')
    const [tunde, settunde] = useState('')
    const {mySearch, setMySearch} = useContext(MovieContext)

    const handleSubmit= (e) => {
        e.preventDefault();
    //    settunde(film)
    
       setMySearch(film);
      setFilm('')

    }
  return (
    <div className="res" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'30px', color:'white'}}>
      <div className='resheading'>
        <h4 style={{fontSize:'50px'}}>n<span style={{color:'red'}}>Flix</span></h4>
      </div>

      <div className='form'>
        <form action="" onSubmit={handleSubmit} style={{display:'flex'}}>
          <div className='input' style={{backgroundColor:'grey', padding:'8px'}}>
          <input type="text" placeholder='Search Movie' style={{backgroundColor:'grey', border:'none', outline:'none'}} value={film} onChange={(e) => setFilm(e.target.value)}  />
          </div>
            <input type="submit" value='Search' style={{backgroundColor:'red', color:'white'}} />
        </form>
      </div>
      {/* {tunde} */}
    </div>
  )
}

export default Form
