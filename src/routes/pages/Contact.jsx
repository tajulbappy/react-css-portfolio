import React from 'react'
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import Hero2 from '../../layouts/Hero2';
import Form from '../../features/Form';
const Contact = () => {
  return (
    <div>
      <NavBar />
      <Hero2 heading="CONTACT." text="Lets have a chat" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
