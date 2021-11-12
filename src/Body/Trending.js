import React from 'react'
import MoviesSeriesComponents from './MoviesSeriesComponents'

function Trending() {
  const url = "/trending/all/day?"
  return (
      <div>
        <MoviesSeriesComponents url={url} message="Trending..."/>
      </div>
  )
}

export default Trending
