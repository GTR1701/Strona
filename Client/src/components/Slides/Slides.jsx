import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SlidesAPI from "../../services/slides-api";
import "./Slides.css";

const slides = new SlidesAPI();
let images = slides.getSlides();

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
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
