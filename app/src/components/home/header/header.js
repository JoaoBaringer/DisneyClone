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

    const MenuHamburguer = () => {
        const Hamburguer = document.getElementById('navbar')
        Hamburguer.classList.toggle('nav-menu')
    }

    const perfil_list = () => {
        const element = document.getElementById('perfil_list')
        element.classList.toggle('perfil_list')
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
                    <li className='nav-item'><a href='/' className='nav-link'>HOME</a></li>
                    <li className='nav-item'><a href='/search' className='nav-link'>SEARCH</a></li>
                    <li className='nav-item'><a href='/wishlist' className='nav-link'>WISHLIST</a></li>
                    <li className='nav-item'><a href='/originals' className='nav-link'>ORIGINALS</a></li>
                    <li className='nav-item'><a href='/movies' className='nav-link'>MOVIES</a></li>
                    <li className='nav-item'><a href='/series' className='nav-link'>SERIES</a></li>
                    <li className='nav-item'><a href='/perfil' className='nav-link'>PERFIL</a></li>
                </div>
            </ul>

            <div id='itens'>

                <div className='item'>
                    <img src={house} />
                    <span><a href='/'>HOME</a></span>
                </div>

                <div className='item'>
                    <img src={lupa} />
                    <span><a href='/search'>SEARCH</a></span>
                </div>

                <div className='item'>
                    <img src={mais} />
                    <span><a href='/wishlist'>WISHLIST</a></span>
                </div>

                <div className='item'>
                    <img src={star} />
                    <span><a href='/originals'>ORIGINALS</a></span>
                </div>

                <div className='item'>
                    <img src={rolo} />
                    <span><a href='/movies'>MOVIES</a></span>
                </div>

                <div className='item'>
                    <img src={tv} />
                    <span><a href='/series'>SERIES</a></span>
                </div>

            </div>

            <div onClick={perfil_list} id='changeperfil'>
                <span id='username'>Jhoony</span>
                <div id='change'></div>
                <ul id='perfil_list'>
                    <li><a href='#'>Profile</a></li>
                    <li><a href='#'>Another profile</a></li>
                    <li><a href='#'>Settings</a></li>
                    <li><a href='#'>Help</a></li>
                    <li><a href='/login'>Exit</a></li>
                </ul>
            </div>

        </div>
    )

}

export default Header