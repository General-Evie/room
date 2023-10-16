import React, { useState } from 'react'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import dark from './images/image-about-dark.jpg'
import light from './images/image-about-light.jpg'
import Nav from './Nav'
import { AngleLeftIcon } from './svgs/AngleLeftSvg'
import { AngleRightIcon } from './svgs/AngleRightSvg'

function Container() {
    const [slide, setSlide] = useState(0)

    const increment = () => {
        if (slide < 2) setSlide(slide + 1)   
    }

    const decrement = () => {
        if (slide > 0) setSlide(slide - 1)
    }


    return (
        <div>
            <Nav />
            <div className='carousel'>
                {slide === 0 && <Slide1 />}
                {slide === 1 && <Slide2 />}
                {slide === 2 && <Slide3 />}
                <div className='angles'>
                    <div className='angle' onClick={decrement}><AngleLeftIcon /></div>
                    <div className='angle' onClick={increment}><AngleRightIcon /></div>
                </div>
            </div>
            
            <div className='slide4'>
                <img src={dark} />
                <div className='slide'>
                    <h2>About our furniture</h2>
                    <p>

                        Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best express your interests and what
                        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are available to help you create your dream space.
                    </p>
                </div>
                <img src={light} />
            </div>
        </div>
    )
}

export default Container