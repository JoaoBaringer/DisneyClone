import React, { useContext } from 'react';
import Header from '../../components/header/header';
import './css/wishlist.css'
import { ListContext } from '../../context/WishProvider';
import decrement from './imgs/decrement.png';
import Footer from '../../components/Footer/Footer'

const Wishlist = () => {

    const storage = useContext(ListContext);
    const newstoragevalues = Object.values(storage)


    function removemovie(id) {
        storage.removeItem(id)

        const element = document.querySelector('.app')
        const divelement = document.createElement('div')
        const pelement = document.createElement('p')
        const unprogressdiv = document.createElement('div')

        pelement.innerText = 'Movie removed...'
        divelement.setAttribute('class', 'removedmovie')
        unprogressdiv.setAttribute('class', 'unprogress')

        divelement.appendChild(pelement)
        divelement.appendChild(unprogressdiv)
        element.appendChild(divelement)

        setTimeout(() => {
            divelement.remove();
        }, 2000);

    }

    return (
        <div id='WishContent'>
            <Header />

            <div id='WishMovies'>
                {newstoragevalues == 0 ? (<p id='Empty'>Empty List...</p>) :
                    (newstoragevalues.map(image => {
                        const id = image
                        return (
                            <div key={id} className='wish-card'>
                                <img alt={id} src={image} />
                                <div className='decrement' onClick={() => removemovie(id)}>
                                    <img src={decrement} />
                                </div>
                            </div>
                        )
                    }))}
            </div>

            <Footer />
        </div>
    )
}

export default Wishlist