import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SlidesAPI from "../../services/slides-api";
import "./Slides.css";
import { motion } from "framer-motion";

const slides = new SlidesAPI();
let images = slides.getSlides();

const properties = {
  prevArrow: (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <button className="tlo-strzalka">
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    </motion.div>
  ),
  nextArrow: (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <button className="tlo-strzalka">
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    </motion.div>
  ),
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...properties}>
        {images.map((fadeImage) => (
          <div className="each" key={fadeImage.id}>
            <div className="container">
              <img src={fadeImage.href} className="slajd-home" />
              <div className="layer"></div>
            </div>
            <div className="text-container">
              <div className="centered nag">
                <h2 className="nag">{fadeImage.text}</h2>
              </div>
              <div className="centered tekst">
                <h3 className="tekst">{fadeImage.text2}</h3>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
