import React from "react";
import Navbar from "../../components/navbar/component.navbar";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slideshow from "../../components/Slides/Slides";

function Home({ ...props }) {
  return (
    <div id="Home">
      <Navbar key={101} />
      <div className="slideshow-container">
        <Slideshow />
      </div>
    </div>
  );
}

export default Home;
