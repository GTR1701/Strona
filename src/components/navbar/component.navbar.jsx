import './component.navbar.css'
import React from 'react';
import NavButton from '../button/component.button';
import NavbarApi from '../../services/navbar-api'

const navbarApi = new NavbarApi();
let ListOfContents = navbarApi.getBtnContents();

function Navbar() {
    return ( 
        <div className='nav-bar'>
            {ListOfContents.map(btn => <NavButton key={ListOfContents.id} content={btn} />)}        
        </div>
    );
}

export default Navbar;