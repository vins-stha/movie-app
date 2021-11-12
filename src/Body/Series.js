import React from 'react'
import MoviesSeriesComponents from './MoviesSeriesComponents'


function Series() {

  const URL = "/trending/tv/week?"

  return (
      <MoviesSeriesComponents url={URL} message="Popular Tv Series"/>
  )
}

export default Series
