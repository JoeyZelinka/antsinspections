import { useState } from 'react'
import { Nav, Navbar } from 'rsuite';
import './App.css';
import CertsModal from './components/CertsModal/CertsModal';




function App() {
  const [size, setSize] = useState();

  const [openCertsModal, setOpenCertsModal] = useState(false);
  const handleOpenCertsModal = value => {
    setSize(value);
    setOpenCertsModal(true);
  };
  const handleCloseCertsModal = () => setOpenCertsModal(false);


  return (
    <div>
    <div className="App">
      <div className="inspectHome">
        <center>
          <img className="homeInspectionAnt" src="standingAnt.png" alt="" />
        </center>
      </div>
      <Navbar className="navbar">
        {/* <Navbar.Brand href="#">Ant's Inspections Home</Navbar.Brand> */}
        <Nav>
          <Nav.Item>Get A Quote!</Nav.Item>
          <Nav.Item>Testimonials</Nav.Item>
          <Nav.Item>Flying Ant Drone (Coming Soon!)</Nav.Item>
          <Nav.Menu title="About">
            <Nav.Item>Us</Nav.Item>
            <Nav.Item onClick={() => handleOpenCertsModal('full')}>Our Certifications</Nav.Item>
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
            <h2><b>Phone:</b> 770-282-1566</h2>
            <h2><b>Email:</b> tracy@antsinspections.com</h2>
          </div>

          <img className="bigAnt" src="centerAnt.png" alt="" />
        </center>
      </div>
    </div >

<CertsModal
  size={size}
  openCertsModal={openCertsModal}
  handleCloseCertsModal={handleCloseCertsModal}

/>
</div>
  );

}

export default App;
