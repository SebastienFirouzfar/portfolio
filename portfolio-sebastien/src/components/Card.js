import React from 'react';


//CARD
export const Card = (props) => {
    const {infoAbout} = props;
  
    return (
        <div className="card">
         <a href={infoAbout.lien}>  <img src={process.env.PUBLIC_URL + `./assets/${infoAbout.image}`} 
            className="card-img-top" 
            alt="Sebastien" />  </a> 
           
            <div class="card-body">
              <h1 class="card-title">{infoAbout.nameSchool}</h1>
              <h5>Année :  {infoAbout.year}</h5>
              <h5>{infoAbout.options}</h5>
            </div>
          </div>
    ) 
}


export const CardFrontEnd = (props) => {
  const {infoCompetence} = props;

  return (
      <div className="card">
       <img src={process.env.PUBLIC_URL + `./assets/${infoCompetence.category}/${infoCompetence.imageLanguage}`} 
          className="card-img-top" 
          alt={infoCompetence.nameLanguage}  />  
      </div>
  )
}

export const CardBackEnd = (props) => {
  const {infoCompetence} = props;

  return (
      <div className="card">
       <img src={process.env.PUBLIC_URL + `./assets/${infoCompetence.category}/${infoCompetence.imageLanguage}`} 
          className="card-img-top" 
          alt={infoCompetence.nameLanguage} />  
      </div>
  )
}


//LIST
export const ListFrontEnd = (props) =>{
  const {data} = props;
  const aboutCompetence = data[1]
  console.log(aboutCompetence)
  
  return (
      <div className="container d-flex">
         <div className="row">
        {aboutCompetence.map(infoCompetence => <CardFrontEnd infoCompetence={infoCompetence} /> )}
        </div>
      </div>
  )
}


export const ListBackEnd = (props) =>{
  const {data} = props;
  const aboutCompetence = data[2]
  console.log(aboutCompetence)
  
  return (
      <div className="container d-flex">
         <div className="row">
        {aboutCompetence.map(infoCompetence => <CardBackEnd infoCompetence={infoCompetence} /> )}
        </div>
      </div>
  )
}


export const List = (props) =>{
    const {data} = props;
    const aboutInformation = data[0]
    console.log(aboutInformation)
      
      return (
          <div className="container d-flex">
             <div className="row">
            {aboutInformation.map(infoAbout => <Card infoAbout={infoAbout} /> )}
            </div>
          </div>
      )
}