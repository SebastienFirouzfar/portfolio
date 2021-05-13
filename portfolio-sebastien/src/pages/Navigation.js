import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    
    <div className="container">
      <nav className="navbar navbar-expand-md text-aligne">
        <ul className="navbar-nav">
          <li><NavLink exact to="/" activeClassName="nav-active"> Accueil</NavLink></li>
          <li><NavLink exact to="/about" activeClassName="nav-active">About</NavLink></li>
          <li><NavLink exact to="/projects" activeClassName="nav-active">Projects</NavLink></li>
          <li><NavLink exact to="/contact" activeClassName="nav-active">Contact</NavLink></li>
          </ul>
      </nav>
    </div>
  );
};

