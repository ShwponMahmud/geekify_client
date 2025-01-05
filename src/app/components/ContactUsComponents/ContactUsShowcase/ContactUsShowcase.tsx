import React from 'react'
import './ContactUsShowcase.css'
import Showcase from '../../Showcase/Showcase'
import contactusbanner from '../../../../assets/images/contactusbanner.jpg'
function ContactUsShowcase() {
  return (
    <>
      <Showcase
        backgroundImage={"/contactusbanner.jpg"}
        title="Contact"
        highlights="Us"
        paragraph="We’re here to assist with all your tech needs! Reach out to our team of experts for personalized support and guidance. Let’s solve your challenges together—efficiently and effectively."
      />
    </>
  );
}

export default ContactUsShowcase