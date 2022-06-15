import React from 'react'
import './css/header.css'
import logo from './imgs/disney-logo.png'
import house from './imgs/casa.png'
import lupa from './imgs/lupa.png'
import mais from './imgs/mais.png'
import rolo from './imgs/rolo.png'
import star from './imgs/star.png'
import tv from './imgs/tv.png'

const Header = () => {

    function MenuHamburguer() {
        const Hamburguer = document.getElementById('navbar')
        Hamburguer.classList.toggle('nav-menu')
    }

    return (
        <div id='navbar'>

            <div className='Logo'>
                <a href='/'><img alt='logo' src={logo} /></a>
            </div>

            <div onClick={MenuHamburguer} className='hamburguer'>
                <div className='line' id='line1'></div>
                <div className='line' id='line2'></div>
                <div className='line' id='line3'></div>
            </div>

            <ul className='menu'>
                <div className='menu-hamburguer'>
                    <li className='nav-item'><a href='/' className='nav-link'>INICIO</a></li>
                    <li className='nav-item'><a href='/search' className='nav-link'>PESQUISA</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>MINHA LISTA</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>ORIGINAIS</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>FILMES</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>SERIES</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>PERFIL</a></li>
                </div>
            </ul>

            <div id='itens'>

                <div className='item'>
                    <img src={house} />
                    <span><a href='/'>INICIO</a></span>
                </div>

                <div className='item'>
                    <img src={lupa} />
                    <span><a href='/search'>PESQUISA</a></span>
                </div>

                <div className='item'>
                    <img src={mais} />
                    <span><a>MINHA LISTA</a></span>
                </div>

                <div className='item'>
                    <img src={star} />
                    <span><a>ORIGINAIS</a></span>
                </div>

                <div className='item'>
                    <img src={rolo} />
                    <span><a>FILMES</a></span>
                </div>

                <div className='item'>
                    <img src={tv} />
                    <span><a>SÉRIES</a></span>
                </div>

            </div>

            <div className='changeperfil'>
                <span className='username'>Jhoony</span>
                <div className='change'></div>
            </div>

        </div>
    )

}

export default Header