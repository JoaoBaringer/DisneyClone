import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/principal/content';
import NotFoundScreen from './screens/NotFoundScreen/NotFoundScreen';
import SignUp from './screens/signup/signup';
import Login from './screens/login/login';
import Search from './screens/Search/Search';
import Wishlist from './screens/wishlist/wishlist';
import MovieScreen from './screens/movies/movies';
import Originals from './screens/originals/originals';
import Series from './screens/series/series';

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route path='*' element={<NotFoundScreen />}></Route>
                <Route exact path='/login' element={<Login />}></Route>
                <Route exact path='/signup' element={<SignUp />}></Route>
                <Route exact path='/search' element={<Search />}></Route>
                <Route exact path='/wishlist' element={<Wishlist />}></Route>
                <Route exact path='/movies' element={<MovieScreen />}></Route>
                <Route exact path='/originals' element={<Originals />}></Route>
                <Route exact path='/series' element={<Series />}></Route>
            </Routes>
        </BrowserRouter >
    )
}

export default Rotas
