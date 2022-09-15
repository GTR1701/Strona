import React from 'react'
import Modal from "react-responsive-modal";

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