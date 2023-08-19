import React from 'react'



const imgPath= 'https://image.tmdb.org/t/p/w500'
const unavailable = 'http://www.bookerteeenterprises.com/wp-content/uploads/2018/02/product-currently-unavailable.png'
const Item = ({x}) => {
  return (
    <div style={{width:'150px', margin:'20px', height:'205px', backgroundColor:'black', color:'white', padding:'30px', textAlign:'center', borderRadius:'40px', border:'5px solid green'}} >
      <img src={x.poster_path ? `${imgPath}${x.poster_path}`: unavailable} alt="" style={{width:'100%', height:'100px', objectFit:'cover'}} />
      <p>{x.original_title}</p>
      <div >
        
        <p>{x.release_date}</p>
        <span>{x.vote_average}</span>
      </div>
    </div>
  )
}

export default Item
