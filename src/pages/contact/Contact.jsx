import React from 'react'
import Hero from '../../globalComponent/herosection/Hero'
import Form from './components/Form'

function Contact() {
  const heading = "Contact Us"
  const para = "Have a question or just want to get in touch? Message us below!"
  return (
    <>
    <Hero heading={heading} para={para}/>
    <Form/>
    </>
  )
}

export default Contact
