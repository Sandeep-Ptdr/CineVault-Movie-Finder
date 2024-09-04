import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
 
  
   

  return (
    <>
    <Link className='link' to={`/movie/${movie.imdbID}`}  >
    <div  className='movie-card'>

      <div  className='movie-img-container'><img src={movie.Poster} alt="" /></div>

    <div className='movie-info'>
      <h4 className='movie-title'>{movie.Title}</h4>
      <span className='movie-year'>{movie.Year}</span>

    
    
    </div>  
    </div>
    </Link>

    
    </>
  )
}

export default MovieCard
