import "./component.navbar.css";
import React from "react";
import NavButton from "../button/component.button";
import NavbarApi from "../../services/navbar-api";
import LoginModal from "../login-modal/component.loginModal";

const navbarApi = new NavbarApi();
let ListOfContents = navbarApi.getBtnContents();

function Navbar() {
  return (
    <div className="nav-bar-main">
      <a className="navbar-logo" href="/">
        <img src="LOGO-IRTEL-JPG-V3.jpg" alt="" className="navbar-logo" />
      </a>
      {ListOfContents.map((btn) => (
        <NavButton key={ListOfContents.id} content={btn} />
      ))}
      <div className="nav-bar-right">
        <LoginModal />
      </div>
    </div>
  );
}

export default Navbar;
