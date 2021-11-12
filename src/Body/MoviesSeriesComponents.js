import React, {useEffect, useState} from 'react'
import './Body.css'
import axios from 'axios'


function MoviesSeriesComponents(props) {

  const IMAGE_API = `${process.env.REACT_APP_IMAGE_API}`
  const BASE_URL = `${process.env.REACT_APP_BASE_URL}`
  const API_KEY = `${process.env.REACT_APP_API_KEY}`
  const SEARCH_URL = BASE_URL + "/search/multi?&api_key=" + API_KEY + "&query="
  const no_image_url = "/no-movie.png"
  var url = BASE_URL + props.url + "&api_key=" + API_KEY

  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [isSearch, setIsSearch] = useState(false)
  const [message, setMessage] = useState([])

  useEffect(() => {
    retrieveData(url)

    setMessage(props.message)

  }, [])

  function retrieveData(url) {
    axios.get(url)
        .then((response) => {
          console.log(response.data)
          // if (!props.isGenreSpecific) {
          //   console.log('main response', props.isGenreSpecific, response.data, response.data.results[0].id)

          //   setMovies(response.data.results)
          // } else 
          {
            console.log(response.data.items)
            setMovies(response.data.items)
          }

        })
        .catch((error) => {
          console.log('Errorrr', error)
        })
  }

  const setRatingClass = (rate) => {
    if (rate >= 6)
      return "green"
    else if (rate > 4 && rate < 6)
      return "yellow"
    else
      return "black"

  }

  function handleSearch(e) {
    e.preventDefault()
    url = SEARCH_URL + search + "&page=1&include_adult=false"
    setIsSearch(true)
    setMessage("Search results for '" + search + "'")
    retrieveData(url)
  }

  var movie_items = movies.length > 0 && movies.map((movie, id) => {
    return (
        <div className="movie-item" key={movie.id}>
          <img className="movie-poster"
               src={(movie.poster_path != null) ? (IMAGE_API + movie.poster_path) : no_image_url} alt={movie.title}/>
          <div className="info">

            <h6>{movie.title == null ? movie.name : movie.title}
              {movie.media_type === "tv" && isSearch == true && (
                  (" (TV-series)")
              )}
            </h6>

            {movie.vote_average !== undefined &&
            (
                <span className={setRatingClass(movie.vote_average)}>{(movie.vote_average).toFixed(1)}</span>
            )
            }
          </div>
          <div className="overview">
            <h4>Overview</h4>
            <p>{movie.overview}</p>
          </div>

        </div>
    )

  })
  return (
      <div className=" justify-content-center">
        <div className="contents">
          <div className="search">
            <form onSubmit={handleSearch}>
              <input type="text" className="search-box" placeholder="Search for movie or series" value={search}
                     onChange={(e) => {
                       setSearch(e.target.value)
                     }}/>
            </form>
            <span className="message">
                        {message}
                     </span>
          </div>
          <div className="movie-container">

            {movie_items}

          </div>
        </div>
      </div>


  )
}

export default MoviesSeriesComponents
