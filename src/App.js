import { useState } from 'react'
import { Nav, Navbar, Button } from 'rsuite';
import './App.css';
import CertsModal from './components/CertsModal/CertsModal';
import RequestModal from './components/RequestModal/RequestModal';




function App() {
  const [size, setSize] = useState();

  const [openCertsModal, setOpenCertsModal] = useState(false);
  const handleOpenCertsModal = value => {
    setSize(value);
    setOpenCertsModal(true);
  };
  const handleCloseCertsModal = () => setOpenCertsModal(false);

  const [openReqInspect, setOpenReqInspect] = useState(false);
  const handleOpenReqInspect = value => {
    setSize(value);
    setOpenReqInspect(true);
  };
  const handleCloseReqInspect = () => setOpenReqInspect(false);
  

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
            <Nav.Item onClick={() => handleOpenReqInspect('full')}>Request an Inspection!</Nav.Item>
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
            <div className="contactInfo">
              <Button target="_blank" rel="noreferrer" href="https://app.spectora.com/home-inspectors/my-inspection-company-a517d4e8a0/sample_report?sample_id=16485" appearance="link"><h4 className="reportSample">Click Here to See A Sample Same Day Inspection Report!</h4></Button>
              {/* <h2><b>Phone:</b> 770-282-1566</h2>
              <h2><b>Email:</b> tracy@antsinspections.com</h2> */}
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

      <RequestModal 
      size={size}
      openReqInspect={openReqInspect}
      handleCloseReqInspect={handleCloseReqInspect}
      />
    </div>
  );

}

export default App;
