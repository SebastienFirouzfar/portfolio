import React from "react";
// import { NavLink } from "react-router-dom";
import {Navbar, Container, Nav } from 'react-bootstrap';

export const Navigation = () => {
  return (
    <div className="containerNavigation">
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/projects">Project</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="./media/Firouzfar-Sebastien-CV-18.08.21.pdf" target="_blank">Download CV</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
