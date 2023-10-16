import React from 'react'
import hero2 from './images/desktop-image-hero-2.jpg'
import { ArrowIcon } from './svgs/ArrowSvg'

function Slide2() {
    return (
        <div className='slide2'>
            <img src={hero2}/>
            <div className='slide'>
                <h1>We are available all across the globe</h1>
                <p>
                    With stores all over the world, it's easy for you to find furniture for your home or place of business.
                    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
                    store locator. Any questions? Don't hesitate to contact us today.
                </p>
                <button>Shop now<ArrowIcon /></button>
            </div>
        </div>
    )
}

export default Slide2