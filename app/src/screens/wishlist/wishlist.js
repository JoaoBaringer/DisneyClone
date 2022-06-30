import React, { useContext } from 'react';
import Header from '../../components/home/header/header';
import './css/wishlist.css'
import { ListContext } from '../../hooks/Provider';
import decrement from './imgs/decrement.png';
import Footer from '../../components/home/Footer/Footer'

const Wishlist = () => {

    const storage = useContext(ListContext);
    const newstoragevalues = Object.values(storage)

    function removemovie(id) {
        storage.removeItem(id)
    }



    return (
        <div id='Wishlist'>
            <Header />
            <div id='container-fluid'>
                {newstoragevalues == 0 ? (<div id='Empty'><p>Empty wishlist...</p></div>) : (newstoragevalues.map(image => {
                    let id = image
                    return (
                        <div key={image} className='wishlist-card'>
                            <img src={image} id={id} />
                            <div onClick={() => removemovie(id)} className='decrement'>
                                <img alt='decrement' src={decrement} />
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