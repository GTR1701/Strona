import React from "react";
import GetUsers from "../../components/getUsers/getUsers.component";
import Navbar from "../../components/navbar/component.navbar";
// import Profile from "../../components/UserProfile/UserProfile";
import { useAuth0 } from "@auth0/auth0-react";

function Panel({ ...props }) {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div id="Home">
        <Navbar key={101} />
        <GetUsers />
        {/* <Profile /> */}
      </div>
    )
  );
}

export default Panel;
