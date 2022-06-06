import React, { useState } from 'react'
import './css/carousel.css'
import { SliderData } from './SliderData'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const size = SliderData.length -1

    const nextSlide = () => {
        setCurrent(current !== size ? current + 1 : 0)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? size : current - 1)
    }


    return (
        <div id='Carousel'>
            <FiChevronRight className='right-arrow' onClick={nextSlide}/>
            <FiChevronLeft className='left-arrow' onClick={prevSlide}/>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        {index === current && <img src={slide.image} alt='carousel' className='image'/>}
                    </div>
                )
            })}
        </div>
    )
}

export default Carousel