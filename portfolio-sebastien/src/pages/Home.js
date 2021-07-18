import React from "react";
import { Navigation } from "../pages/Navigation";
import { motion } from "framer-motion";
import { animationOne, transition, transitionTitle } from "../animation/index";
import Typical from "react-typical";

export const Home = () => {
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
        {/* <img id="imgHome" className="img-responsive" src="./assets/pexels-pixabay-39284.jpg" alt="Computer"/> */}

        <div className="homePage">
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animationOne}
            transition={transitionTitle}
          >
            <h2 className="display-2">
              Hello Welcome on the officiel web site's Sebastien Firouzfar
            </h2>
          </motion.div>

         
          <p className="lead" id="ParagrapheTypical">
            I'm a {""}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={["web developper", 2000, "Front-end",2000]}
            />
          </p>
        </div>
      </div>
    </motion.div>
  );
};
