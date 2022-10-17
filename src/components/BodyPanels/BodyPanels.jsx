import React from 'react';
import { Col, Grid, Panel, Popover, Row, Whisper } from 'rsuite';
import './BodyPanels.css';

export default function BodyPanels() {

    const speaker = (
        <Popover style={{ width: 400}} title="About Us">
            <p>Ant’s Inspections is owned and operated by Tracy and Anthony Latronica out of Hiram, GA. Our focus is on home inspections as well as mobile crane inspections, however we tend to think of ourselves as “Jack and Jill of all trades” and are currently serving the community with crane, home and commercial inspections as well as small construction projects such as fence repair, deck and porch construction, residential renovations, etc.</p>
                    <p>We met in a small town outside Austin, Tx in 2008 and, as cliché as it sounds, it was love at first sight. We immediately started making plans to move to the city where there was more opportunity for work and in 2011, we met that goal and started a new life. Anthony answered a newspaper ad that simply said “operator needed, call Mike” and just like that he entered the world of underground tunnel mining. Over the next 10 years we followed that career path as he advanced amongst the ranks of a very uniquely skilled group of individuals, landing us here in the Atlanta area in 2016. As rewarding and amazing as that industry was, life presented us with some clear signs that it was time to stop working for “the man” and start working for ourselves. In June we both quit our jobs and took the plunge into small business ownership and have not regrated it for a single moment in the short time since. </p>
                    <p>We look forward to servicing our community while engaging with our neighbors in charitable efforts whenever we can. Our 17-year-old son designed our logos, we have a close friend currently building our website, our brother (not by blood, but by heart) has been an integral part of developing our business and to us, THAT is what this is all about- working with your friends, building each other up and celebrating each other’s successes. My mentor used to say, “a rising tide lifts all boats” and we live by that motto and hope our business exemplifies that sentiment as well. </p>
        </Popover>
    );

    return (
        <div className='bodyPanels'>
            <center>
                <Grid fluid>
                    <Row>

                        <Col xs={24} sm={24} md={8}>
                            <Panel shaded className="techPanel" style={{ width: 350 }} bodyfill>
                                <h2>Technology</h2>
                                <p className="techStatement"><b>Ant’s Inspections uses top of the line technology to thoroughly assess your home and, in some cases, detect concerning issues not visible to the naked eye. A list of some of the devices we bring to each inspection include:</b></p>
                                <li>DJI Mini Pro 3 Drone</li>
                                <li>FLIR Thermal Imaging Scanner</li>
                                <li>Professional Industrial Endoscope</li>
                                <li>Carbon Monoxide Meter</li>
                                <li>Laser Distance Meter</li>
                                <li>EXTECH IR Thermometer</li>
                                <li>Ozark Binoculars</li>
                                <li>MM9 Moisture Meter</li>
                                <li>Multiple Voltage Testers</li>
                                <li>Electronic Gas Leak Detector</li>
                                <img className="infrared" src="infrared.png" alt="" />

                            </Panel>
                        </Col>

                        {/* <Col xs={3}><Divider vertical style={{ height: 700 }} /></Col> */}

                        <Col xs={24} sm={24} md={8}>
                            <Panel shaded className="inspectorPanel" bordered style={{ width: 350 }} bodyfill>
                                <h2>Meet Your Inspector</h2>
                                <Whisper placement="right" trigger="hover" controlId="control-id-hover" speaker={speaker}>
                                    <img className="anthony" src="anthony.png" alt="" />
                                </Whisper>
                                <p className="bio">Anthony is an InterNACHI Certified Professional Inspector who has resided in the Atlanta area since 2016. Starting at a young age, Ant developed a passion for construction in various specialties such as building boat docks, remodeling homes, concrete work, and commercial renovation projects. For over a decade, Ant worked in under ground tunnel mining and has been an integral part of major infrastructure projects that have served the communities in Dallas, Austin and Atlanta. He is known for his strong work ethic, dedication to his craft, and his widely versed knowledge of a variety of aspects of both home and commercial construction. He is a family man with a wife and 3 children; his hobbies include cooking and riding his motorcycle in his free time.</p>
                            </Panel>
                        </Col>



                        <Col xs={24} sm={24} md={8}>
                            <Panel shaded className="techPanel" style={{ width: 350 }} bodyfill>
                                <h2>Reviews & Testimonials</h2>
                                <img className="reviews1" src="reviews.png" alt="" />
                                <p className="testHeader"><h3>Linda R says</h3></p>
                                <p>
                                    "Ant's Inspections did a great job on my home, they go above and beyond with their customer service and I would definitely recommend them to anyone looking for an inspection or home construction work."
                                </p>
                                <p className="testHeader"><h3>Joey Z says</h3></p>
                                <p>
                                    "Ant always does thorough work. The "craftsmanship first" attitude he puts towards all jobs he's hired for makes him an easy pick for any and all services offered"
                                </p>

                            </Panel>
                        </Col>

                    </Row>
                </Grid>
                </center>
        </div>
    )
}
