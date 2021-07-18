import React from "react";

export const CardProject = (props) => {
  const { project } = props;

  return (
    <div className="card text-center" id="card-project">
      <h4>{project.nameProject} </h4>

      <div className="overflow">
        <a href={project.urlProject}>
          <img src={ process.env.PUBLIC_URL +`./assets/${project.category}/${project.imageProject}`}
            className="card-img-top"
            alt={project.imageProject}
          />
        </a>
      </div>

      <p className="lead" id="paragrapheProject">
        {project.description}<br />
        
        Cliquer sur l'image pour voir le résultat
      </p>

      <div className="d-flex">
        <a className="urlGitHub" href={project.urlGitHub}>
          Voir la page github
        </a>
      </div>
    </div>
  );
};

export const ListProject = (props) => {
  const { data } = props;
  const projects = data[2];
  console.log(projects);

  return (
    <div className="containerProject">
      <div className="row" id="row-project">
        {projects.map((project) => (
          <CardProject key={project.refProject} project={project} />
        ))}
      </div>
    </div>
  );
};
