import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active"> Accueil</NavLink>
      <NavLink exact to="/about" activeClassName="nav-active">About</NavLink>
      <NavLink exact to="/projects" activeClassName="nav-active">Projects</NavLink>
      <NavLink exact to="/contact" activeClassName="nav-active">Contact</NavLink>
    </div>
  );
};

