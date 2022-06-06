import React from 'react'
import { Link } from 'react-router-dom'
import './css/NotFoundScreen.css'

const NotFoundScreen = () => {
    return (
        <div id='NotFound'>
            <h1>404</h1>
            <p>PAGE NOT FOUND</p>
            <Link to='/home'>Voltar a listagem</Link>
        </div>
    )
}

export default NotFoundScreen