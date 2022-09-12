import React from 'react'
import './component.button.css'

function NavButton(content, ...props) {
    return (
        <a href="" className="nav-bar-button nav-bar-left">{content}</a>
    );
}

export default NavButton;