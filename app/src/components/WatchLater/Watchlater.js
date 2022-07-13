import React, { useContext } from 'react';
import increment from '../home/Cards/imgs/increment.png'
import { ListContext } from '../../hooks/WishProvider';
import './Watchlater.css';

const Watchlater = ({ id }) => {
    let storage = useContext(ListContext);

    function watchlist(id) {
        storage.setItem(id, id)
        const element = document.querySelector('.app')
        const divelement = document.createElement('div')
        const progressdiv = document.createElement('div')
        const pelement = document.createElement('p')

        pelement.innerText = 'Added movie... Check your Wishlist'
        divelement.setAttribute('class', 'addedmovie')
        progressdiv.setAttribute('class', 'progress')

        divelement.appendChild(pelement)
        divelement.appendChild(progressdiv)
        element.appendChild(divelement)

        setTimeout(() => {
            divelement.remove()
        }, 2000);

    }

    return (
        <div onClick={() => watchlist(id)} className='increment'>
            <img alt='increment' src={increment} />
        </div>
    )
}

export default Watchlater