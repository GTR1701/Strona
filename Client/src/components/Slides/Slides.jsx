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
        {images.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.href} className="" />
            </div>
            <h2>{fadeImage.text}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
