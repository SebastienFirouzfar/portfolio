import React from "react";
import { Navigation } from "../pages/Navigation";
import {motion} from 'framer-motion'
import {animationOne, transition} from "../animation/index"


export const Home = () => {
  return (
    <motion.div initial="out"
     animate="in" 
     exit="out" 
     variants={animationOne}
     transition={transition}>
    <div>
      <Navigation />
      <img id="imgHome" className="img-responsive" src="./assets/pexels-pixabay-39284.jpg" alt="Computer"/>
    </div>
    </motion.div>
  );
};
