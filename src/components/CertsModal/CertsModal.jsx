import React from 'react';
import { Modal } from 'rsuite';
import './CertsModal.css';

export default function CertsModal({

    size,
    openCertsModal,
    handleCloseCertsModal,

}) {
    return (
        <div>
            <Modal size={size} open={openCertsModal} onClose={handleCloseCertsModal}>
                <Modal.Body>


                    <center>
                        <p><a href="https://www.nachi.org/verify?nachiid=NACHI22082510" target="_blank" rel="noreferrer"><img src="http://www.nachi.org/webseals/s-v2-NACHI22082510.gif" width="98" height="102" alt="Certified by the International Association of Certified Home Inspectors" border="0" /></a></p>
                        <p><a href="https://www.nachi.org/verify?nachiid=NACHI22082510" target="_blank" rel="noreferrer"><img src="http://www.nachi.org/webseals/internachi-honor-guarantee.png?nachiid=NACHI22082510" width="170" height="170" alt="$10,000 Honor Guarantee, Backed by InterNACHI" border="0" /></a></p>
                        <p>
                        <img className="img" src="codeOfEthics.png" alt="" />
                        <img className="img" src="interNachiQR.png" alt="" />
                        <img className="img" src="standards.png" alt="" />
                        </p>
                        <p>
                        <img className="img" src="roofData.png" alt="" />
                        <img className="img" src="OSHA-30.jpg" alt="" />
                        </p>
                    </center>

                </Modal.Body>
            </Modal>
        </div>
    )
}
