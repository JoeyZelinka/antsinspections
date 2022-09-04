import './App.css';
import { motion } from "framer-motion";
import { Grid, Row, Col } from 'rsuite';
import { useState } from 'react'
import HomeInspections from './components/HomeInspections/HomeInspections';



function App() {
  const variants = {
    hidden: {
      opacity: 0,
      x: 100,
      y: 100,
    },
    show: {
      opacity: 1,
      x: 100,
      y: 100,
      transition: {
        duration: 5,

      }
    }
  }

  const [homeInspection, setHomeInspection] = useState(false)
  const handleSetHomeInspection = () => {
    setHomeInspection(true)
  }

  const handleSetCloseHomeInspection = () => {
    setHomeInspection(false)
  }

  return (
    <div className="App">
      {!homeInspection ?
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show">
      
            
          
          <div className="panels">
            
            <Grid fluid>
              <Row>
                  <Col>
                    <div className="homeInspection" >
                      <button onClick={handleSetHomeInspection} className="homeInspectionsHome" shaded bordered bodyFill style={{ width: 300, height: 150 }}>
                        Go to Home Inspections
                      </button>
                    </div>
                  </Col>
                  <Col>
                  <img className="standingAnt" src="standingAnt.png" alt="" />
                  </Col>
                  <Col>
                    <div className="craneInspection">
                      <button className="getQuote" shaded bordered bodyFill style={{ width: 300, height: 150 }}>
                        Go to Crane Inspections
                      </button>
                    </div>
                  </Col>
              </Row>
            </Grid>
                
          </div>
        </motion.div>
        : null}



      {homeInspection ?
        <HomeInspections
        handleSetCloseHomeInspection={handleSetCloseHomeInspection}
        />
        : null}
    </div >
  );
}

export default App;
