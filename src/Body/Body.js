import React from 'react'
import MoviesSeriesComponents from './MoviesSeriesComponents'

export default function Body(props) {
    const BASE_URL = `${process.env.REACT_APP_BASE_URL}`
    const API_KEY = `${process.env.REACT_APP_API_KEY}`
    const URL = "/discover/movie?sort_by=popularity.desc"

    return(
        <MoviesSeriesComponents url = {URL} message = "Popular Movies" />
    )
}
