import React from 'react';

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