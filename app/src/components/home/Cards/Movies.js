import React, { useContext } from 'react'
import './css/Movies.css'
import './css/Cards.css'
import { movies } from './imgs/movies'
import increment from './imgs/increment.png'
import { ListContext } from '../../../hooks/Provider'

const Movies = () => {
    const storage = useContext(ListContext);


    function getmovie(id) {
        storage.setItem(id, id)
        console.log(storage)
    }


    return (
        <div id='Movies'>
            {movies.map((movie, i) => {
                let id = movie.image
                return (
                    <div key={movie.i} className='movie-card'>
                        <img alt={movie.i} className={movie.i} id={id} src={movie.image} />
                        <div onClick={() => getmovie(id)} className='play'>
                            <img alt='increment' src={increment} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Movies