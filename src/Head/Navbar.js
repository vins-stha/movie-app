import React, { useState, useEffect } from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import axios from 'axios'
import { useHistory } from 'react-router';
import MoviesSeriesComponents from './../Body/MoviesSeriesComponents';
import FilterByGenre from '../Body/ListByGenre';
import { Link } from "react-router-dom";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [genres, setGenres] = useState([])

    const [currentGenre, setCurrentGenre] = useState([])

    const [state, setState] = useState({
        id: null,
        name :""
    })

    const history = useHistory()
  
    const BASE_URL = `${process.env.REACT_APP_BASE_URL}`
    const API_KEY = `${process.env.REACT_APP_API_KEY}`

    var url = BASE_URL + "/genre/movie/list?&api_key="+ API_KEY

    useEffect(() => {     
        axios.get(url)
        .then((res)=>{
            setGenres(res.data.genres) 
            console.log('genres=>', genres)          
                      
        })
        .catch((err)=>console.log(err))
     }, [])

    // const handleGenreClick = (e)=> {
    //     e.preventDefault()        
    //     // console.log('cg', cg)
    //     let genreUrl = "/list/"+currentGenre.id 
    //     history.push({
    //         pathname: "/listByGenre",
    //         state: {
    //             url : 'test',
    //             message :' currentGenrename'
    //         }
        
    //     })
    //     // console.log('cgg', currentGenre)
    //     // return(
    //     //     <FilterByGenre url = {genreUrl} message = {currentGenre.name}/>
    //     // )
    //   }

    const genreList = genres.map((genre, id)=>{
        return(
           
            <div key = {genre.id} className="dropdown-item">
                <div value = {genre.name} className="dropdown-link"  onMouseOver= {(e) => {
                    setCurrentGenre(genre)                 
                    
                }} onClick={(e)=>{
                    e.preventDefault() 
                    let genreUrl = "/list/"+currentGenre.id+"?"
                    history.push({
                        pathname: "/listByGenre",
                        state: {
                            url : genreUrl,
                            message : currentGenre.name
                        }
                    
                    })
                    }
                    }
                   >{genre.name}</div> 
          
              
            </div>
        )
    })
    return (
        <div className="row justify-content-center">
            <div className="nav">
                <a onClick = {(e)=>{ history.push('/') }}>Home</a>
                <a href ="/about-us">About us</a>
                <a className="dropdown-btn" onClick= {e => {
                    setIsOpen(!isOpen)
                }}>Genres
                {isOpen &&(
                       <div className="dropdown-content">
                     {genreList}
                   </div>
                )}                 
                </a>
                
                <a  onClick = {(e)=>{ history.push('/series') }}>Series</a>
                <a  onClick = {(e)=>{ history.push('/popular') }}>Popular</a>
                <a  onClick = {(e)=>{ history.push('/trending') }}>Trending</a>
             
            </div>

        </div>
    )
}
