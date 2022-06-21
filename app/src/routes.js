import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home/home'
import NotFoundScreen from './screens/NotFoundScreen/NotFoundScreen'
import SignUp from './screens/signup/signup'
import Login from './screens/login/login'
import Search from './screens/Search/Search'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route path='*' element={<NotFoundScreen />}></Route>
                <Route exact path='/login' element={<Login />}></Route>
                <Route exact path='/signup' element={<SignUp />}></Route>
                <Route exact path='/search' element={<Search />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas
