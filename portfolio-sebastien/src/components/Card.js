import React from 'react';


//CARD
export const Card = (props) => {
    const {infoAbout} = props;
  
    return (
        <div className="card" id="card-about">
         <a href={infoAbout.lien}>  <img src={process.env.PUBLIC_URL + `./assets/${infoAbout.image}`} 
            className="card-img-top" 
            alt="Sebastien" />  
          </a> 
           
            <div className="card-body">
              <h1 className="card-title">{infoAbout.nameSchool}</h1>
              <h5>Année :  {infoAbout.year}</h5>
              <h6>Option : {infoAbout.options}</h6>
            </div>
          </div>
    ) 
}


export const CardCompetence = (props) => {
  const {infoCompetence} = props;

  return (
      <div className="card" id='cardCompetence'>
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
             <div className="row" id='rowAbout'>
            {aboutInformation.map(infoAbout => <Card key={infoAbout.refAbout}  infoAbout={infoAbout} /> )}
            </div>
          </div>
      )
}

export const ListComptetence = (props) =>{
  const {data} = props;
  const aboutCompetence = data[1]
  console.log(aboutCompetence)
  
  return (
      <div className="containerAbout" id='listCompetence'>
         <div className="row" id="rowCompetence">
        {aboutCompetence.map(infoCompetence => <CardCompetence key={infoCompetence.refCompetence}  infoCompetence={infoCompetence} /> )}
        </div>
      </div>
  )
}