import React from 'react';


//CARD
export const Card = (props) => {
    const {infoAbout} = props;
  
    return (
        <div className="card">
         <a href={infoAbout.lien}>  <img src={process.env.PUBLIC_URL + `./assets/${infoAbout.image}`} 
            className="card-img-top" 
            alt="Sebastien" />  
          </a> 
           
            <div class="card-body">
              <h1 class="card-title">{infoAbout.nameSchool}</h1>
              <h5>Année :  {infoAbout.year}</h5>
              <h6>Option : {infoAbout.options}</h6>
            </div>
          </div>
    ) 
}


export const CardCompetence = (props) => {
  const {infoCompetence} = props;

  return (
      <div className="card">
       <img src={process.env.PUBLIC_URL + `./assets/${infoCompetence.category}/${infoCompetence.imageLanguage}`} 
          className="card-img-top" 
          alt={infoCompetence.nameLanguage}  />  
      </div>
  )
}



//LIST
export const List = (props) =>{
    const {data} = props;
    const aboutInformation = data[0]
    console.log(aboutInformation)
      
      return (
          <div className="containerAbout">
             <div className="row">
            {aboutInformation.map(infoAbout => <Card infoAbout={infoAbout} /> )}
            </div>
          </div>
      )
}

export const ListComptetence = (props) =>{
  const {data} = props;
  const aboutCompetence = data[1]
  console.log(aboutCompetence)
  
  return (
      <div className="containerAbout">
         <div className="row">
        {aboutCompetence.map(infoCompetence => <CardCompetence infoCompetence={infoCompetence} /> )}
        </div>
      </div>
  )
}