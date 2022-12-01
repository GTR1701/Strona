import React from 'react';
import './framer.css';
import FramerAPI from "../../services/framer-api";
import {motion} from "framer-motion";
import { useRef, useEffect, useState } from 'react';

const framer = new FramerAPI();
let frames = framer.getFrames();

const Framer = () => {

    const [width,setWidth]=useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div className='Framer'>
            <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                <motion.div 
                drag="x" 
                dragConstraints={{right: 0, left: -width}} 
                className='inner-carousel'>
                    {frames.map(image => {
                     return(
                            <motion.div className='item' key={image}>
                                <img src={image.href} alt="" />
                                <p className='carousel-text'>{image.text}</p>
                            </motion.div>
                            
                     );
                    })}
                </motion.div>
            </motion.div>

        </div>
    );
}

export default Framer;