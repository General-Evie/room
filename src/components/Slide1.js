import React from 'react'
import hero1 from './images/desktop-image-hero-1.jpg'

function Slide1() {
    return (
        <div className='slide1'>
            <img src={hero1} />
            <div className='slide'>
                <h1>Discover innovative ways to decorate</h1>
                <p>
                    We provide unmatched quality, comfort, and style for property owners across the country.
                    Our experts combine form and function in bringing your vision to life. Create a room in your
                    own style with our collection and make your property a reflection of you and what you love.
                </p>
                <button>Shop now</button>
            </div>
        </div>
    )
}

export default Slide1