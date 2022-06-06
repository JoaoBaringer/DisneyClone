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
    return (
        <div id='navbar'>

            <div className='Logo'>
                <a href='/'><img src={logo} /></a>
            </div>

            <div id='itens'>

                <div className='item'>
                    <img src={house} />
                    <span><a href='/'>INICIO</a></span>
                </div>

                <div className='item'>
                    <img src={lupa} />
                    <span>PESQUISA</span>
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

            <div id='changeperfil'>
                <span id='username'>Jhoony</span>
                <div id='change'></div>
            </div>

        </div>
    )
}

export default Header