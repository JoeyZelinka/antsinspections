import React from 'react';
import { Modal } from 'rsuite';

export default function RequestModal({

    size,
    openReqInspect,
    handleCloseReqInspect,

}) {
    return (
        <div className='request'>
            <Modal size={size} open={openReqInspect} onClose={handleCloseReqInspect}>
                <center>
                <iframe title="request" src='https://app.spectora.com/inspection-request/my-inspection-company-a517d4e8a0?iframe=1' style={{ border: 0, height: 1100, width: 1100 }}></iframe>
                </center>
            </Modal>
        </div>
    )
}
