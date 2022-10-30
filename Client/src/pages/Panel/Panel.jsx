import React from "react";
import GetUsers from "../../components/getUsers/getUsers.component";
import Navbar from "../../components/navbar/component.navbar";
import Profile from "../../components/UserProfile/UserProfile";

function Panel({ ...props }) {
  return (
    <div id="Home">
      <Navbar key={101} />
      <GetUsers />
      <Profile />
    </div>
  );
}

export default Panel;
