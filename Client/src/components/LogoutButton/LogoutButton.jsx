import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="btn-div">
      <a
        className="nav-bar-button nav-bar-right"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Wyloguj
      </a>
    </div>
  );
};

export default LogoutButton;
