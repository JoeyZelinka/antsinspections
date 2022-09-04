import React from 'react';
import { Navbar, Nav } from 'rsuite';
import './HomeInspections.css'

export default function HomeInspections({

  handleSetCloseHomeInspection,

}) {




  return (
    <div>
      <div className="inspectHome">
        <center>
          <img className="homeInspectionAnt" src="standingAnt.png" alt="" />
        </center>
      </div>
      <Navbar className="navbar">
        <Navbar.Brand href="#" onClick={handleSetCloseHomeInspection}>Ant's Inspections Home</Navbar.Brand>
        <Nav>
          <Nav.Item>Get A Quote!</Nav.Item>
          <Nav.Item>Testimonials</Nav.Item>
          <Nav.Item>Flying Ant Drone (Coming Soon!)</Nav.Item>
          <Nav.Menu title="About">
            <Nav.Item>Us</Nav.Item>
            <Nav.Item>Our Certifications</Nav.Item>
            <Nav.Item>Contact</Nav.Item>
            <Nav.Menu title="Our Services">
              <Nav.Item>Service 1</Nav.Item>
              <Nav.Item>Service 2</Nav.Item>
            </Nav.Menu>
          </Nav.Menu>
        </Nav>
        <Nav pullRight>

        </Nav>
      </Navbar>
      <div className="homeInspectBody">
        <center>
          <h1>Our site is under construction but we're not!</h1>
          <h1>Contact us now for all of your home inspection needs!</h1>
          <div className="contactInfo">
            <h2><b>Phone:</b> 830-385-5449</h2>
            <h2><b>Email:</b> tracy@antsinspections.com</h2>
          </div>

          <img className="bigAnt" src="centerAnt.png" alt="" />
        </center>
      </div>

    </div>
  )
}
