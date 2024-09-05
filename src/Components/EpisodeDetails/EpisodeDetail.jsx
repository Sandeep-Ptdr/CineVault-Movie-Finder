 
import './EpisodeDetail.scss'
import { useNavigate, useParams } from 'react-router-dom'
 
import { FaStar, FaThumbsUp } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { useMovieData } from '../../Common/apis/useMovieData';
 


function EpisodeDetail() {
  
  const {  imdbID,season ,episodeID } = useParams()

  const {moviedata} = useMovieData({season:season, episode:episodeID,movieid:imdbID})
  
 
// console.log(moviedata,"moviedataaaaaa")
 


  if(moviedata.length <= 0) return <div className='loader-Wraper'> <div className='loader'></div></div>
  


  return (
    <>
    <div className='background' style={{backgroundImage:`url(${moviedata.Poster})`}}></div>
    <div className='movie-section'>
         <div className='left-section'>
          <div className='movie-title'>
            <h1>{moviedata.Title}</h1>
          </div>
          <div className="movie-rating">
            
             <span>IMDB Rating <i><FaStar style={{color:'yellow'}}/></i> : {moviedata.imdbRating}</span>

             <span>IMDB Votes <i><FaThumbsUp style={{color:'#cbcbcb'}}/></i> : {moviedata.imdbVotes} </span>

             <span>Runtime <i><MdLocalMovies style={{color:'#cbcbcb'}}/></i> : {moviedata.Runtime}</span>

             <span>Year <i><SlCalender style={{color:' #cbcbcb'}} /></i> : {moviedata.Year}</span>

          </div>

          <div className="movie-plot"><p>{moviedata.Plot}</p></div>

          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{moviedata.Director}</span>
            </div>

            <div>
              <span>Stars</span>
              <span>{moviedata.Actors}</span>
            </div>

            <div>
              <span>Genre</span>
              <span>{moviedata.Genre}</span>
            </div>

            <div>
              <span>Languages</span>
              <span>{moviedata.Language}</span>
            </div>

            <div>
              <span>Awards</span>
              <span>{moviedata.Awards}</span>
            </div>
          </div>
      </div>

      <div className="right-section">
        <div>
          <img src={moviedata.Poster} alt={moviedata.Title} />
        </div>
      </div>
  
  
    </div>
   
    </>
  )
}

export default EpisodeDetail
