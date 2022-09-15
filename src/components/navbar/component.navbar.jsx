import './component.navbar.css'
import React from 'react';
import NavButton from '../button/component.button';
import NavbarApi from '../../services/navbar-api';

const navbarApi = new NavbarApi();
let ListOfContents = navbarApi.getBtnContents();
let getLoginBtn = navbarApi.getLoginBtn();

function Navbar() {
    return ( 
        <div className='nav-bar-main'>
            <a className='navbar-logo' href="/"><img src="LOGO-IRTEL-JPG-V3.jpg" alt="" className='navbar-logo' /></a>
            {/* <Image content="LOGO-IRTEL-JPG-V3.jpg" /> */}
            <div className='nav-bar'>{ListOfContents.map(btn => <NavButton key={ListOfContents.id} content={btn} />)}</div>
            <div className='login'>{getLoginBtn.map(btn => <NavButton className='nav-bar-right' key={ListOfContents.id} content={btn} />)}</div>
        </div>
    );
}

export default Navbar;