import React from 'react'
import './component.button.css'

function NavButton({content: {id,content, href}, ...props}) {
    return (
        <a href={href} className="nav-bar-button nav-bar-left">{content}</a>
    );
}

export default NavButton;