import React from 'react'
import {useLocation} from 'react-router-dom';
import Navbar from '../Head/Navbar';
import MoviesSeriesComponents from './MoviesSeriesComponents';

const ListByGenre = () => {
  const location = useLocation()
  const url = location.state.url
  const message = location.state.message
  const isGenreSpecific = true

  return (
      <div>
        <Navbar/>
        <MoviesSeriesComponents
            url={url}
            message={message}
            isGenreSpecific={isGenreSpecific}/>
      </div>
  )
}

export default ListByGenre
