import React from "react";
import GetData from "../../components/getUsers/getData";
import Navbar from "../../components/navbar/component.navbar";
// import Profile from "../../components/UserProfile/UserProfile";
import { useAuth0 } from "@auth0/auth0-react";

function Panel({ ...props }) {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div id="Home">
        <Navbar key={101} />
        <GetData />
        {/* <Profile /> */}
      </div>
    )
  );
}

export default Panel;
