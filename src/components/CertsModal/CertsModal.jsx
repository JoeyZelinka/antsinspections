import React from 'react';
import { Col, Grid, Panel, Row } from 'rsuite';
import './CertsModal.css';

export default function CertsModal() {
    return (
        <div className="certs">
            <Panel>
                <Panel>
                    <center>
                        <p>
                            <h1>Our Services</h1>
                            <h3>For a thorough, visual inspection including:</h3>
                            <li>Drone Roof Inspection</li>
                            <li>Exterior (doors, windows, siding, etc)</li>
                            <li>Driveways and Walkways</li>
                            <li>Interior (doors, windows, walls, floors, ceilings, staircases)</li>
                            <li>Attic, Ventilation, Insulation</li>
                            <li>Kitchen Appliances (built in only)</li>
                            <li>Heating & Central Air</li>
                            <li>Thermal imaging scan to check for moisture/leaks</li>
                            <li>Electrical Systems</li>
                            <li>Plumbing Systems</li>
                        </p>
                        <p>
                            <li>Less than 1500 square feet= $300</li>
                            <li>1500-2000 sq ft= $350</li>
                            <li>2000-2500 sq ft= $400</li>
                            <li>2500-3000 sq ft= $450</li>
                            <li>3000-4000 sq ft= $500</li>
                            <li>4000-5000 sq ft= $550</li>
                            <li>Over 5000 sq ft= call for a quote</li>
                            <li>Homes over 50 years old= $50 up-charge</li>
                            <li>Homes with a crawl space = $50 up-charge</li>
                        </p>

                    </center>

                                <center>
                    <div className="certImg">
                        <Grid fluid>
                            <Row>
                                <center className="internachis">
                                <a href="https://www.nachi.org/verify?nachiid=NACHI22082510" target="_blank" rel="noreferrer"><img src="internachi1.png" width="98" height="102" alt="Certified by the International Association of Certified Home Inspectors" border="0" /></a>
                            
                               
                            
                                <a href="https://www.nachi.org/verify?nachiid=NACHI22082510" target="_blank" rel="noreferrer"><img src="internachi2.png" width="98" height="102" alt="$10,000 Honor Guarantee, Backed by InterNACHI" border="0" /></a>
                                </center>
                           </Row>
                            <Row>
                            <Col xs={64} sm={64} md={24}><img className="img" src="codeOfEthics.png" alt="" /></Col>
                            <Col xs={64} sm={64} md={24}><img className="img" src="interNachiQR.png" alt="" /></Col>
                            <Col xs={64} sm={64} md={24}><img className="img" src="standards.png" alt="" /></Col>
                            </Row>

<Row>
<Col xs={64} sm={64} md={24}><img className="img" src="roofData.png" alt="" /></Col>
<Col xs={64} sm={64} md={24}><img className="img" src="OSHA-30.jpg" alt="" /></Col>
                            </Row>
                        </Grid>
                    </div>
                            </center>

                </Panel>
            </Panel>
        </div>
    )
}
