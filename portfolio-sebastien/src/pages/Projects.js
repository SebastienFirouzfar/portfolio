import React from "react";
import { Navigation } from "../pages/Navigation";
import { ListProject } from "../components/CardProject";

//data
import { list } from "../data/dataInfomation";

import { animationOne, transition } from "../animation/index";
import { motion } from "framer-motion";

import Slide from "react-reveal/Fade";

export const Projects = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <div>
        <Navigation />
        <h1>Projects</h1>
        <Slide bottom>
          <ListProject data={list} />
        </Slide>
      </div>
    </motion.div>
  );
};
