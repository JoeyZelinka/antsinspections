import React from 'react';
import { Modal } from 'rsuite';



export default function ServicesModal({

    size,
    openServicesModal,
    handleCloseServicesModal,

}) {



    return (
        <div className="">
            <Modal size={size} open={openServicesModal} onClose={handleCloseServicesModal}>
                <Modal.Body>
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
                        <img className="modalAnt" src="centerAnt.png" alt="" />
                    </center>
                </Modal.Body>
            </Modal>
        </div>
    )
}
