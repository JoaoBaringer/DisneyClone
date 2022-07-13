import React from 'react';
import Header from '../../components/home/header/header';
import { movies as originalmovies } from '../../components/home/Cards/imgs/movies';
import './css/originals.css';
import Footer from '../../components/home/Footer/Footer';
import WatchLater from '../../components/WatchLater/Watchlater';

const Originals = () => {

    const originalmovie = originalmovies.filter(movie => movie['originals'])
    return (
        <div id='Originals-container'>
            <Header />
            <div id='originals'>
                <h1>Originals</h1>
                <div id='originals-movies'>
                    {originalmovie.map(movie => {
                        let id = movie.image
                        return (
                            <div key={movie.i} className='originals-card'>
                                <img alt={movie.i} src={movie.image} />
                                <WatchLater id={id} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Originals