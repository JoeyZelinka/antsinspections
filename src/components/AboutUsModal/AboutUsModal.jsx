import React from 'react'
import { Modal } from 'rsuite'
import ModalBody from 'rsuite/esm/Modal/ModalBody'

export default function AboutUsModal({

size,
openAboutUsModal,
handleCloseAboutUsModal,

}) {



  return (
    <div className="aboutUs">
<Modal size={size} open={openAboutUsModal} onClose={handleCloseAboutUsModal}>
                <ModalBody>
                    <center>
                    <p>Ant’s Inspections is owned and operated by Tracy and Anthony Latronica out of Hiram, GA. Our focus is on home inspections as well as mobile crane inspections, however we tend to think of ourselves as “Jack and Jill of all trades” and are currently serving the community with crane, home and commercial inspections as well as small construction projects such as fence repair, deck and porch construction, residential renovations, etc.</p>
                    <p>We met in a small town outside Austin, Tx in 2008 and, as cliché as it sounds, it was love at first sight. We immediately started making plans to move to the city where there was more opportunity for work and in 2011, we met that goal and started a new life. Anthony answered a newspaper ad that simply said “operator needed, call Mike” and just like that he entered the world of underground tunnel mining. Over the next 10 years we followed that career path as he advanced amongst the ranks of a very uniquely skilled group of individuals, landing us here in the Atlanta area in 2016. As rewarding and amazing as that industry was, life presented us with some clear signs that it was time to stop working for “the man” and start working for ourselves. In June we both quit our jobs and took the plunge into small business ownership and have not regrated it for a single moment in the short time since. </p>
                    <p>We look forward to servicing our community while engaging with our neighbors in charitable efforts whenever we can. Our 17-year-old son designed our logos, we have a close friend currently building our website, our brother (not by blood, but by heart) has been an integral part of developing our business and to us, THAT is what this is all about- working with your friends, building each other up and celebrating each other’s successes. My mentor used to say, “a rising tide lifts all boats” and we live by that motto and hope our business exemplifies that sentiment as well. </p>
                    <img className="modalAnt" src="centerAnt.png" alt="" />
                    </center>
                </ModalBody>
            </Modal>
    </div>
  )
}
