import React from 'react'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'

function Container() {
    return (
        <div>
            <Slide1 />
            {/* <Slide2 /> */}
            {/* <Slide3 /> */}
            <div className='slide4'>
                About our furniture
                Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.
            </div>
        </div>
    )
}

export default Container