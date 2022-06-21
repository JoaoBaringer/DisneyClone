import React, { useState } from "react";
import Header from "../../components/home/header/header";
import { movies as importmovies } from '../../components/home/Cards/imgs/movies'
import './css/Searchbar.css'
import Footer from '../../components/home/Footer/Footer'

const Search = () => {
    const [word, setword] = useState('')

    const newmovies = importmovies.filter((movie) => movie['i'].toLowerCase().includes(word.toLowerCase()))

    return (
        <div id="SearchContent">

            <Header />

            <div id="Searchbar">
                <input type='text' value={word} onChange={(e) => setword(e.target.value)} placeholder="Type movie name" />
            </div>

            <div id="Search-movies">
                {newmovies.map((movie, i) => {
                    return (
                        <div key={movie.i} className='movie-card'>
                            <img alt={movie.i} key={movie.i} className={movie.i} src={movie.image} />
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Search