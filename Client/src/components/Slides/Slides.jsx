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
              <div class="layer"></div>
            </div>
            <div class="text-container">
              <div class="centered">
                <h2>{fadeImage.text}</h2>
              </div>
              <div class="centered">
                <h3>{fadeImage.text2}</h3>{" "}
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
