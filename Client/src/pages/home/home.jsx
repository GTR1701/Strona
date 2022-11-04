import React from "react";
import Navbar from "../../components/navbar/component.navbar";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home({ ...props }) {
  return (
    <div id="Home">
      <Navbar key={101} />
    </div>
  );
}

export default Home;
