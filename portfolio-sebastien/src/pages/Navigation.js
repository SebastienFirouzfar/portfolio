import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="containerNavigation">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink exact to="/about" activeClassName="nav-active">About</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink exact to="/projects" activeClassName="nav-active">Projects</NavLink>
            </li>

           <li className="nav-item">
              <NavLink exact to="/contact" activeClassName="nav-active">Contact</NavLink>
            </li>
            
            <li className="nav-item">
              <li> <a href="./media/Firouzfar-Sebastien-CV-Dev-Web.pdf" target="_blank">
              Download my cv</a>
            </li>
          
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
