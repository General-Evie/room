import React from 'react'
import hero3 from './images/desktop-image-hero-3.jpg'
import { ArrowIcon } from './svgs/ArrowSvg'

function Slide3() {
    return (
        <div className='slide3'>
            <img src={hero3}/>
            <div className='slide'>
                <h1>Manufactured with the best materials</h1>
                <p>
                    Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
                    to ensure that every product is made as perfect and as consistent as possible. With three decades of
                    experience in this industry, we understand what customers want for their home and office.
                </p>
                <button>Shop now<ArrowIcon /></button>
            </div>
        </div>
    )
}

export default Slide3