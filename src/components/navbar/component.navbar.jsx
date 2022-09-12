import './component.navbar.css'
import React from 'react';
import NavButton from '../button/component.button';

function Navbar(btnContent, ...props) {
    return ( 
        <div className='nav-bar'>        
            <NavButton content={btnContent}/>
        </div>
    );
}

export default Navbar;