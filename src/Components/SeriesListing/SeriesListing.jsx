import React from 'react'
import './SeriesListing.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useMovieData } from '../../Common/apis/useMovieData'


function SeriesListing() {

  const { imdbID, season} = useParams()
 
  // console.log(imdbID, season, "seriesid and season")

  const  {moviedata} = useMovieData({ movieid: imdbID, season: season })

  const Navigate = useNavigate()

  // console.log(moviedata, "season data with episodes")


 

  return (
    <div className='seasonData-container'>
      {
         moviedata.Response === 'True' ? (
          <> <div className='headings'> <h1>{`${moviedata.Title} Season ${moviedata.Season}`}</h1>
            <p>{`Total episodes: ${moviedata.Episodes.length}`}</p> </div>

            <div className="episode-container">
              {moviedata.Episodes.map((epsdName, idx) => {
                return <h3 onClick={() => Navigate(`/movie/${imdbID}/season/${season}/episode/${idx+1}`)}>{`${idx + 1}. ${epsdName.Title}`}</h3>
              }

              )}
            </div>
          </>

        ) : <div className='loader-Wraper'> <div className='loader'></div> </div>
      }


    </div>
  )
}

export default SeriesListing
