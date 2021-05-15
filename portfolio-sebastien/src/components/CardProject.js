import React from 'react';

export const CardProject = (props) => {
   const {project} = props;

  return (
      <div className="card" id="projectCard">
        <h3>{project.nameProject} </h3>
        
        <img src={process.env.PUBLIC_URL + `./assets/${project.category}/${project.imageProject}`} 
          className="card-img-top" 
          alt={project.imageProject } />   
       
        <p className="paragrapheProject">{project.description}</p>
        <div className="url">
          <a href={project.urlProject}>Voir le projet</a>
          <a href={project.urlGitHub}>Voir la page github</a>
        </div>

      </div>
  )
};


export const ListProject = (props) =>{
    const {data} = props;
    const projects = data[3]
    console.log(projects)
      
      return (
          <div className="container">
             <div className="d-flex justify-content-center row col-lg-12 col-md-6 " >
                 {projects.map(project => <CardProject project={project} /> )}
            </div>
          </div>
      )
  }
