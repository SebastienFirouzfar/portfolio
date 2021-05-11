import React from "react";
import { Navigation } from "../pages/Navigation";



export const About = (props) => {
  return (
    <div className="container" class="col-lg-12 col-md-12">
      <Navigation />
      <div class="col-lg-12 col-md-12">
        <img
          className="imgPresentation"
          src="./img/IMG_24822.jpg"
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

        <h1>Mes parcours</h1>

        <div className="container">
          <div className="row">
            
            
              <div class="card">
                <img src="./img/BeCode.jpg" class="card-img-top" alt="Sebastien" />
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            
          
          </div>
        </div>



      </div>
    </div>
  );
};

export const List = (list) =>{

    return (
        <div>

        </div>
    )
}

