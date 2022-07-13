import React from 'react'
import './css/Cards/Cards.css'
import { cards } from './imgs/cards'        
import Movies from './Movies'

const Cards = () => {
    return (
        <div id='cards'>

            <div id='card-menu'>
                {cards.map((c) => {
                    return (
                        <div key={c.i} className='card-image'>
                            <img alt={c.i} className={c.i} src={c.image}/>
                        </div>
                    )
                })}
            </div>

            <Movies/>
            
        </div>
    )
}

export default Cards