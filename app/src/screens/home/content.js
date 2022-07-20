import React from 'react';
import Header from '../../components/header/header';
import Carousel from '../../components/Carousel/carousel';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';
import './css/content.css'

export default function Content() {

    return (
        <div id='content'>
            <Header />
            <Carousel />
            <Cards />
            <Footer />
        </div>
    )
}
