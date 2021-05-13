import React from "react";
import { Navigation } from "../pages/Navigation";

import { List, ListCompetence } from '../components/Card'

//data
import { list } from '../data/dataInfomation'

export const About = () => {
  return (
    <div className="container" class="col-lg-12 col-md-12">
      <Navigation />
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

        <h1>Mes parcours / My career paths</h1>
      </div>
      <List data={list}/>
      <br/>
      <h1>Compétence front-end</h1>
      <ListCompetence data={list}/>
    </div>
  );
};




