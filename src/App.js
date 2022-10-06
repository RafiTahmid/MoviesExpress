
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// e9ca62f3

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e9ca62f3'

const movie1 = {
  "Title": "Spiderman in Cannes",
  "Year": "2016",
  "imdbID": "tt5978586",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
}

const App = () => {

  const searchMovies = async (title) =>{
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json()
    console.log(data.Search)
  }

  useEffect( () => {
    searchMovies('Spiderman')
  },[]);
  return (
    <div className="app">
      <h1>MoviesExpress</h1>

      <div className="search">
        <input
        placeholder='Search for Movies'
        value='Superman' 
        onChange={ () => {}}/>

        <img src={SearchIcon} alt="" onClick={ () => {}}/>
      </div>

      <div className="container">
        <MovieCard></MovieCard>
      </div>
    </div>
    
  );
}

export default App;
