import React from 'react';
import Header from '../../components/home/header/header';
import { movies } from '../../components/home/Cards/imgs/movies';
import './css/series.css';
import Footer from '../../components/home/Footer/Footer';
import WatchLater from '../../components/WatchLater/Watchlater';

const Series = () => {

    const series = movies.filter(movie => movie['category'] == 'serie')

    return (
        <div id='SeriesContent'>
            <Header />
            <div id='Series'>
                {series.map(movie => {
                    const id = movie.image
                    return (
                        <div key={movie.image} className='serie-card'>
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

export default Series