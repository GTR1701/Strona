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
            <div className='nav-bar'>{ListOfContents.map(btn => <NavButton key={ListOfContents.id} content={btn} />)}</div>
            <div className='login'>{getLoginBtn.map(btn => <NavButton className='nav-bar-right' key={ListOfContents.id} content={btn} />)}</div>
            <Modal open={sign} onClose={this.onCloseModal}>
                    <div className="modal-body">
                        <h2>Get Started Absolutely<span> Free!</span></h2>
                        <span className="subtitle">No credit card needed</span>
                        <form className="contact-form form-validate3" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" />
                        </form>
                    </div>
                </Modal>
        </div>
    );
}

export default Navbar;