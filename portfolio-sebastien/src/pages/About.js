import React from "react";
import { Navigation } from "../pages/Navigation";




export const About = () => {
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
      </div>
    </div>
  );
};


export const Card = (props) => {
  const {infoAbout} = props;

  return (
      <div className="card">
       <a href={infoAbout.lien}>  <img src={process.env.PUBLIC_URL + `./img/${infoAbout.image}`} 
          className="card-img-top" 
          alt="Sebastien" />  </a> 
         
          <div class="card-body">
            <h1 class="card-title">{infoAbout.nameSchool}</h1>
            <h5>Année :  {infoAbout.year}</h5>
            <h5>Option : {infoAbout.options}</h5>
          </div>
        </div>
  )

}

export const List = (props) =>{
    const {data} = props;
    const aboutInformation = data[0]
    console.log(aboutInformation)
    
    return (
        <div className="container">
           <div className="row col-lg-12 col-md-6">
          {aboutInformation.map(infoAbout => <Card infoAbout={infoAbout} /> )}
          </div>
        </div>
    )
}

