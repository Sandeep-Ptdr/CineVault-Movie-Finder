import React, { useEffect, useState } from 'react'
import './MovieDetail.scss'
import { useNavigate, useParams } from 'react-router-dom'
import MovieApi from '../../Common/apis/MovieApi'
import { APIKEY } from '../../Common/apis/MovieApikey'
import { FaStar, FaThumbsUp } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
// import SeriesListing from '../../Components/SeriesListing/SeriesListing'


function MovieDetail() {
  const Navigate = useNavigate()
  const { imdbID  } = useParams()
  const [movieInfo, setMovieInfo] = useState([])



  useEffect(() => {

    const fetchMovieInfo = async () => {

      const response = await MovieApi.get(`?i=${imdbID}&apikey=${APIKEY}`)
      // console.log("movie detail", response.data)
      setMovieInfo(response.data)

    }
    fetchMovieInfo()

  }, [imdbID])
  // console.log(imdbID,"imdbidddddddd")


  if(movieInfo.length <= 0) return <div className='loader-Wraper'> <div className='loader'></div> </div>


  return (
    <>
    <div className='background' style={{backgroundImage:`url(${movieInfo.Poster})`}}></div>
    <div className='movie-section'>
         <div className='left-section'>
          <div className='movie-title'>
            <h1>{movieInfo.Title}</h1>
          </div>
          <div className="movie-rating">
            
             <span>IMDB Rating <i><FaStar style={{color:'yellow'}}/></i> : {movieInfo.imdbRating}</span>

             <span>IMDB Votes <i><FaThumbsUp style={{color:'#cbcbcb'}}/></i> : {movieInfo.imdbVotes} </span>

             <span>Runtime <i><MdLocalMovies style={{color:'#cbcbcb'}}/></i> : {movieInfo.Runtime}</span>

             <span>Year <i><SlCalender style={{color:' #cbcbcb'}} /></i> : {movieInfo.Year}</span>

          </div>

          <div className="movie-plot"><p>{movieInfo.Plot}</p></div>

          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{movieInfo.Director}</span>
            </div>

            <div>
              <span>Stars</span>
              <span>{movieInfo.Actors}</span>
            </div>

            <div>
              <span>Genre</span>
              <span>{movieInfo.Genre}</span>
            </div>

            <div>
              <span>Languages</span>
              <span>{movieInfo.Language}</span>
            </div>

            <div>
              <span>Type</span>
              <span>{movieInfo.Type}</span>
            </div>

            <div>
              <span>Awards</span>
              <span>{movieInfo.Awards}</span>
            </div>
          </div>
      </div>

      <div className="right-section">
        <div className='posterImg'>
          <img src={movieInfo.Poster} alt={movieInfo.Title} />
        </div>
      </div>
 { movieInfo.Type === 'series'  && <div className='seasonNum-Container'>
      <h2>Seasons</h2>
      <div>
      
      { 
      (Array.from({length:movieInfo.totalSeasons})).map((_,index) => 
          <button 
          onClick={() => Navigate(`/movie/${imdbID}/season/${index+1}`)}
          className='btn'>{index+1}</button>  
        )
       
      }
      </div>
     </div> 
     
    
    }
  
    </div>
    
    </>
  )
}

export default MovieDetail
