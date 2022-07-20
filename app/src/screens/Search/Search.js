import React, { useState } from "react";
import Header from "../../components/header/header";
import { movies as importmovies } from '../../components/Cards/imgs/movies';
import './css/Searchbar.css'
import Footer from '../../components/Footer/Footer'
import Watchlater from "../../components/WatchLater/Watchlater";

const Search = () => {
    const [word, setword] = useState('')

    const newmovies = importmovies.filter((movie) => movie['i'].toLocaleLowerCase().includes(word.toLowerCase()))

    return (
        <div id="SearchContent">

            <Header />

            <div id="Searchbar">
                <input type='text' value={word} onChange={(e) => setword(e.target.value)} placeholder="Type movie name" />
            </div>

            <div id="Search-movies">
                {newmovies.map((movie, i) => {
                    let id = movie.image
                    return (
                        <div key={movie.i} className='search-card'>
                            <img alt={movie.i} id={id} key={movie.i} className={movie.i} src={movie.image} />
                            <Watchlater id={id}/>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Search