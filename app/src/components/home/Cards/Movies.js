import React from 'react'
import './css/Movies.css'
import './css/Cards.css'
import { movies } from './imgs/movies'
import increment from './imgs/increment.png'

const Movies = () => {


    const getparent = (id) => {
        const btn = document.querySelector(`#${id}`);
        const parentnode = btn.parentNode;
        console.log(parentnode)
    }

    return (
        <div id='Movies'>
            {movies.map((movie, i) => {
                let id = `p${i}`;
                return (
                    <div key={movie.i} className='movie-card'>
                        <img alt={movie.i} className={movie.i} src={movie.image} />
                        <div onClick={() => getparent(id)} className='play' id={id}>
                            <img alt='increment' src={increment} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Movies