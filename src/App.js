import { useState } from 'react'
import { Col, Grid, Nav, Navbar, Panel, Row } from 'rsuite';
import './App.css';
import BodyPanels from './components/BodyPanels/BodyPanels';
import CertsModal from './components/CertsModal/CertsModal';
import RequestModal from './components/RequestModal/RequestModal';





function App() {
  const [size, setSize] = useState();

  const [openReqInspect, setOpenReqInspect] = useState(false);
  const handleOpenReqInspect = value => {
    setSize(value);
    setOpenReqInspect(true);
  };
  const handleCloseReqInspect = () => setOpenReqInspect(false);




  return (
    <div className="App">


      <img className="home" src="house.png" alt="" />




      <Navbar className="navbar">

        <Nav>

          <Nav.Item onClick={() => handleOpenReqInspect('full')}>Request an Inspection!</Nav.Item>
          <Nav.Item>Flying Ant Drone (Coming Soon!)</Nav.Item>
          <Nav.Item><h6><b>Phone:</b> 770-282-1566</h6></Nav.Item>

        </Nav>

      </Navbar>
      <div >
        <Panel className="bottomBar">
          <Grid fluid>
            <Row gutter={16}>
              <center>
                <Col xs={8}><h4>* Home Inspections  *</h4></Col>
                <Col xs={8}><h4>* Crane Inspections *</h4></Col>
                <Col xs={8}><h4>* Commercial Inspections  *</h4></Col>
              </center>
            </Row>

            <center><button className="reportSample" target="_blank" rel="noreferrer" href="https://app.spectora.com/home-inspectors/my-inspection-company-a517d4e8a0/sample_report?sample_id=16485" appearance="link"><h4>Click Here to See a Sample Same Day Inspection Report!</h4></button></center>
          </Grid>
        </Panel>

        <div className="homeInspectBody">

          <BodyPanels />
        </div>

        {/* <footer>

      <CertsModal/>
        </footer> */}


      </div >
      <RequestModal
        size={size}
        openReqInspect={openReqInspect}
        handleCloseReqInspect={handleCloseReqInspect}
      />




    </div>
  );

}

export default App;
