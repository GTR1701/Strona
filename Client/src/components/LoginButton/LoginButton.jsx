import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(false);
    loginWithRedirect();
  };

  return (
    <div className="btn-div">
      <a className="nav-bar-button nav-bar-right" onClick={handleClick}>
        Zaloguj
      </a>
    </div>
  );
};

export default LoginButton;
