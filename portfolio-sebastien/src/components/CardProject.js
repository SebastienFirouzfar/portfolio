import React from "react";

export const CardProject = (props) => {
  const { project } = props;

  return (
    <div className="card text-center">
      <h4>{project.nameProject} </h4>

      <div className="overflow">
        <img
          src={ process.env.PUBLIC_URL +`./assets/${project.category}/${project.imageProject}`}
          className="card-img-top"
          alt={project.imageProject}
        />
      </div>

      <p className="paragrapheProject">{project.description}</p>
      <div className="d-flex">
        <a href={project.urlProject}>Voir le projet</a>
        <a href={project.urlGitHub}>Voir la page github</a>
      </div>
    </div>
  );
};

export const ListProject = (props) => {
  const { data } = props;
  const projects = data[3];
  console.log(projects);

  return (
    <div className="container d-flex ">
      <div className="row ">
        {projects.map((project) => (
          <CardProject project={project} />
        ))}
      </div>
    </div>
  );
};
