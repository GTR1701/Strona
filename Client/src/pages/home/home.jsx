import React from "react";
import Navbar from "../../components/navbar/component.navbar";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Framer from "../../components/framer/framer";
import Slideshow from "../../components/Slides/Slides";
import IconShow from "../../components/ikonki/ikonki";

function Home({ ...props }) {
  return (
    <div id="Home">
      <Navbar key={101} />
      <motion.div
        initial={{ y: 3000 }}
        animate={{ y: 0 }}
        transition={{ type: "slide", duration: 1 }}
      >
        <div className="slideshow-container">
          <Slideshow />
        </div>
        <div className="iconshow-container">
          <IconShow />
        </div>
        <div className="framer-container">
          <Framer />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
