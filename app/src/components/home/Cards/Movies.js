import React from 'react';
import { movies } from './imgs/movies';
import Watchlater from '../../WatchLater/Watchlater';
import './css/Movies/Movies.css';

const Movies = () => {
    return (
        <div id='Movies'>
            {movies.map((movie, i)=> {
                let id = movie.image
                return (
                         <div key={movie.i} className='movie-card'>
                            <img alt={movie.i} className={movie.i} id={id} src={movie.image} />
                            <Watchlater id={id} />
                        </div>
                )
            })}
        </div>
    )
}

export default Movies