
import { useNavigate, useParams } from 'react-router-dom'
import { useMovieData } from '../../Common/apis/useMovieData'
import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.scss'
import HomeBg from '../../assets/HomeBg.jpg'
import SearchBar from '../SearchPage/SearchBar'




function MovieListing() {

  const Navigate = useNavigate()

  const { title, page } = useParams()

  const { moviedata, Loading, Error } = useMovieData({ movie: title, currentpage: page })

  console.log(moviedata, "moviedataaaaaaaaa")

  const currentPage = Number(page)

  const totalResults = Math.ceil(moviedata.totalResults / 10)

  const handlePrevBtn = () => {

    if (page > 1) {
      Navigate(`/search/${title}/page/${currentPage - 1}`);
    }
  }

  const handleNextBtn = () => {

    if (page < Math.ceil(totalResults)) {
      Navigate(`/search/${title}/page/${currentPage + 1}`);
    }
  };








  let renderMovies = " ";
  let renderMessage = "";

  if (!title) {

    renderMessage = <div className='bg-Img' style={{ backgroundImage: `url(${HomeBg})` }}>  <h1 className='Heading'>Search Your Favorite Movies or Series here...</h1>


    </div>
  }

  else if (Loading) {
    renderMessage = <div className="loader-Wraper"> <div className="loader"></div> </div>
  }

  else if (moviedata && moviedata.Response === 'True') {


    renderMovies = moviedata?.Search?.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)

  }
  else if (Error) {
    renderMessage = <h3 className='messages'>{`Error Fetching Data : ${Error.message}`}</h3>

  }





  else {
    renderMessage = <h3 className='messages'>{`No Results found for ${title}.Try different Search. `}</h3>
  }








  return (
    <>
      {/* 
<div className='phone-searchBar'> <div>
  <SearchBar/>
  
  </div>  </div> */}
      {
        <div className='movies-wraper'>







          <div className='movie-list'>

            <div>{renderMessage}</div>



            <div>
              {moviedata.totalResults && !Loading && <h2>{`We've found ${moviedata.totalResults} results for ${title}`}</h2>}
              <div className='movieCard-container'>{renderMovies}</div>
            </div>

          </div>

          {moviedata.Response === "True" && (
            <div className="pageBtns-container">

              <div className="prevBtn-container">
                <button
                  disabled={currentPage === 1}
                  onClick={handlePrevBtn}
                  className='prevBtn'>


                  Prev
                </button>

              </div>

              <span>Page {page}/{Math.ceil(totalResults)}</span>

              <div className="nextBtn-container">
                <button
                  className='nextBtn'
                  onClick={handleNextBtn}
                  disabled={currentPage >= totalResults}

                >
                  Next
                </button>
              </div>

            </div>
          )}

        </div>
      }
    </>
  )
}

export default MovieListing
