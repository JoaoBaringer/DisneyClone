import React from 'react';
import Header from '../../components/home/header/header';
import './css/movies.css';
import Footer from '../../components/home/Footer/Footer';
import { movies } from '../../components/home/Cards/imgs/movies'
import WatchLater from '../../components/WatchLater/Watchlater';

const MovieScreen = () => {
    const moviescreen = movies.filter(movie => movie['category'] == 'movie')

    return (
        <div id='MovieScreen'>
            <Header />
            <div id='movies'>
                {moviescreen.map(movie => {
                    const id = movie.image
                    return (
                        <div key={movie.i} className='screenmovie-card'>
                            <img src={movie.image} />
                            <WatchLater id={id}/>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default MovieScreen