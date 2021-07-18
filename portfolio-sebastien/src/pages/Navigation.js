import React from "react";
// import { NavLink } from "react-router-dom";
import {Navbar, Container, Nav } from 'react-bootstrap';

export const Navigation = () => {
  return (
    <div className="containerNavigation">
      {/* <nav className="navbar navbar-expand-lg navbar-light ">
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
      </nav> */}

      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/projects">Project</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="./media/Firouzfar-Sebastien-CV-Dev-Web.pdf" target="_blank">Download CV</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
