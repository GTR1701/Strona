import './component.navbar.css'
import React from 'react';
import NavButton from '../button/component.button';
import NavbarApi from '../../services/navbar-api';
import Image from '../image/component.image'

const navbarApi = new NavbarApi();
let ListOfContents = navbarApi.getBtnContents();

function Navbar() {
    return ( 
        <div className='nav-bar-main'>
            <Image image="../../../public/LOGO-IRTEL-JPG-V3.jpg" />
            <div className='nav-bar'>{ListOfContents.map(btn => <NavButton key={ListOfContents.id} content={btn} />)}</div>
        </div>
    );
}

export default Navbar;