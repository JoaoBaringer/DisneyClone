import React from 'react'
import './css/Movies.css'
import './css/Cards.css'
import { movies } from './imgs/movies'
const Movies = () => {
    return (
        <div id='Movies'>
            {movies.map((movie, i) => {
                return (
                    <div key={movie.i} className='movie-card'>
                        <img alt={movie.i} key={movie.i} className={movie.i} src={movie.image}/>
                    </div>
                )
            })}            
        </div>
    )
}

export default Movies