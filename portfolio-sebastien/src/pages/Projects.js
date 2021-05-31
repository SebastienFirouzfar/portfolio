import React from "react";
import { Navigation } from "../pages/Navigation";
import { ListProject } from "../components/CardProject";

//data
import { list } from "../data/dataInfomation";

import { animationOne, transition } from "../animation/index";
import { motion } from "framer-motion";

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
        <ListProject data={list} />
      </div>
    </motion.div>
  );
};
