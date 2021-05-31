import React from "react";
import { Navigation } from "../pages/Navigation";

import { List, ListFrontEnd, ListBackEnd } from '../components/Card'

//data
import { list } from '../data/dataInfomation'

import {animationThree} from "../animation/index"
import {motion} from 'framer-motion'

export const About = () => {
  return (

    <motion.div initial="out"
    animate="in" 
    exit="out" 
    variants={animationThree}
    >
      

    <div className="container" class="col-lg-12 col-md-12">
      <Navigation />
      <h1>About</h1>
      <div class="col-lg-12 col-md-12">
          <img
          className="imgPresentation"
          src="./assets/IMG_24822.jpg"
          alt="sebastien"
          />
        <p>
          Ayant obtenu le Certificat d’Enseignement d’Etudes Supérieures en
          2017, j’ai par la suite fait deux années d’études supérieures en
          gestion d’informatique. Je suis actuellement une formation de
          développement web chez BeCode. Je clôture une formation intensive en
          développement web de 7 mois.
          <br />
          <br />
          Je suis à la recherche d’un lieu de stage de minimum de 2 mois, tout
          en intégrant une équipe dynamique, qui me donnera l’opportunité d’en
          apprendre davantage dans le métier de développement web, je pourrai de
          plus développer de nouvelles compétences et consolider mes compétences
          existantes.
        </p>
      <h1>Mes parcours </h1>
      </div>
      <List data={list}/>
      <br/>
      <h1>Compétence front-end</h1>
      <ListFrontEnd data={list}/>
      <br/>
      <h1>Compétence back-end</h1>
      <ListBackEnd data={list}/>
    </div>
    </motion.div>
  );
  
};




