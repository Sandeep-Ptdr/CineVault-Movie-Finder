import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home/Home.jsx'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import MovieDetail from './Pages/MovieDetails/MovieDetail.jsx'
import PageNotFound from './Pages/PageNotFound/PageNotFound.jsx'
 
import MovieListing from './Components/MovieListing/MovieListing.jsx'
import SeriesListing from './Components/SeriesListing/SeriesListing.jsx'
import EpisodeDetails from './Components/EpisodeDetails/EpisodeDetail.jsx'
 

const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={<App/>}>

     <Route path='/' element={<Home/>}/>
     <Route path='/search/:title/page/:page' element={<MovieListing/>}/>
     <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
     <Route path='/movie/:imdbID/season/:season' element={<SeriesListing/>} />
     <Route path='/movie/:imdbID/season/:season/episode/:episodeID' element={<EpisodeDetails/>} />
    
       
     <Route path='/*' element={<PageNotFound/>}/>
    
   </Route>
))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     

      <RouterProvider router={router}/>

      

 </StrictMode>
)
