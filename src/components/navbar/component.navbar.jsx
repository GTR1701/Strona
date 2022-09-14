import './component.navbar.css'
import React from 'react';
import NavButton from '../button/component.button';
import NavbarApi from '../../services/navbar-api';

const navbarApi = new NavbarApi();
let ListOfContents = navbarApi.getBtnContents();
let navImage = navbarApi.getImages();

function Navbar() {
    return ( 
        <div className='nav-bar-main'>
            <a href="/"><img src="LOGO-IRTEL-JPG-V3.jpg" alt="" className='navbar-logo' /></a>
            {/* <Image content="LOGO-IRTEL-JPG-V3.jpg" /> */}
            <div className='nav-bar'>{ListOfContents.map(btn => <NavButton key={ListOfContents.id} content={btn} />)}</div>
        </div>
    );
}

export default Navbar;