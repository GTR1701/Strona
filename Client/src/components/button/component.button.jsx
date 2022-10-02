import React from 'react'
import './component.button.css'

function NavButton({content: {id,content, href}, ...props}) {
    return (
        <div className='btn-div'>
            <a href={href} className="nav-bar-button nav-bar-left">{content}</a>
        </div>
    );
}

export default NavButton;