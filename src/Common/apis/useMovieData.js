import { useEffect, useState } from "react";
import MovieApi from "./MovieApi";
import { APIKEY } from "./MovieApikey";

export const useMovieData = ({ movie, currentpage, movieid, season, episode }) => {
  
  const [moviedata, setmoviedata] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);



  useEffect(() => {

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await MovieApi.get(
        `?apikey=${APIKEY}${movie ? "&s=" + movie : ""}${currentpage ? "&page=" + currentpage : ""
        }${movieid ? "&i=" + movieid : ""}${season ? "&season=" + season : ""}${episode ? "&episode=" + episode : ""
        }`
      )
      setmoviedata(response.data)
         
     } catch (error) {
        setError(error)
      
     }
     finally{
      setLoading(false)
     }
  }
       fetchData();

  }, [movie, currentpage, movieid, season, episode]);
   

  return {moviedata,Loading, Error};
};