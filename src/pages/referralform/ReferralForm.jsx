import React from 'react'
import Hero from '../../globalComponent/herosection/Hero'
import Form from './components/Form'

function ReferralForm() {
  const heading = "Referral Form"
  const para = "We Care Community is dedicated to giving people with disabilities, their families, and their caretakers in the Sydney areas individualised, custom-made help."
  return (
   <>
   <Hero heading={heading} para={para}/>
   <section>
    <h1 className='text-3xl font-bold text-[#1a2b5a] text-center tracking-tight p-4'>
      Get In Touch With Us
    </h1>
    <p className='text-lg text-[#1a2b5a] text-center tracking-tight p-2'>
Please fill out the form below if you would like to refer a participant to We Care Community services. <br /> Someone from our friendly team will get back to you soon
    </p>
   </section>
   <Form/>
   </>
  )
}

export default ReferralForm
