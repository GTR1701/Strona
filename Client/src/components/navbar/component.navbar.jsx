import React from "react";
import "./component.navbar.css";
import NavButton from "../button/component.button";
import NavbarApi from "../../services/navbar-api";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const navbarApi = new NavbarApi();
let ListOfContents = navbarApi.getBtnContents();
let logBtns = navbarApi.getLogBtns();

function Navbar() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div className="nav-bar-main">
        <a className="navbar-logo" href="/">
          <img src="LOGO-IRTEL-JPG-V3.jpg" alt="" className="navbar-logo" />
        </a>
        {logBtns.map((btn) => (
          <NavButton key={ListOfContents.id} content={btn} />
        ))}
        <div className="nav-bar-right">
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
    );
  } else {
    return (
      <div className="nav-bar-main">
        <a className="navbar-logo" href="/">
          <img src="LOGO-IRTEL-JPG-V3.jpg" alt="" className="navbar-logo" />
        </a>
        {ListOfContents.map((btn) => (
          <NavButton key={ListOfContents.id} content={btn} />
        ))}
        <div className="nav-bar-right">
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
    );
  }
}

export default Navbar;
