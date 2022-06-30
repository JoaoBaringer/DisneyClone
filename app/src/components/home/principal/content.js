import React from 'react'
import Header from '../header/header'
import Carousel from '../Carousel/carousel'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
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
