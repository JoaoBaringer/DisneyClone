import React from 'react'
import './css/Movies.css'
import { movies } from './imgs/movies'
import './css/Cards.css'

const Movies = () => {
    return (
        <div id='Movies'>
            {movies.map((m, i) => {
                return (
                    <div key={m.i} className='movie-card'>
                        <img alt={m.i} key={m.i} className={m.i} src={m.image}/>
                    </div>
                )
            })}            
        </div>
    )
}

export default Movies