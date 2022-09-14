import React from 'react'
import './component.image.css'

function Image({image, ...props}) {
    return (
        <div>
            <a href="/"><img src={image} alt="" className='navbar-logo' /></a>
        </div>
    );
}

export default Image;