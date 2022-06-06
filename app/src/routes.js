import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './home/screens/home'
import NotFoundScreen from './home/screens/NotFoundScreen'
import SignUp from './signup/signup'
import Login from './login/login'

const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='*' element={<NotFoundScreen/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/signup' element={<SignUp/>}></Route>
        </Routes>
    </BrowserRouter>
    )
    
}

export default Rotas
