import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <></>
  ) : (
    <div className="btn-div">
      <a className="nav-bar-button nav-bar-right" onClick={loginWithRedirect}>
        Zaloguj
      </a>
    </div>
  );
};

export default LoginButton;
