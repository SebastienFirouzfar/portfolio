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
            <h1>
              Hello Welcome on the officiel web site's Sebastien Firouzfar
            </h1>
          </motion.div>

          <p className="ParagrapheTypical">
            I'm a {""}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={["young developper", 2000, "photographer", 2000]}
            />
          </p>
        </div>
      </div>
    </motion.div>
  );
};
