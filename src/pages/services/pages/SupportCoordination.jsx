import React from 'react'
import Hero from '../../../globalComponent/herosection/Hero'
import ServiceTemplate from '../../../globalComponent/seviceTem/ServiceTemplate';
import img from "../../../assets/hero/support.png";
function SupportCoordination() {
  const heading = "Support Coordination"
 const heading1 = "Introducing and \nExecuting "
  const para = "Our Team who  work as Support Coordinators make sure that you get the help you need to reach your goals."
  const para1 = "We Care Community Support Coordination is a vital part of building and managing your NDIS budget. Our goal is to help participants better coordinate and access the supports in their NDIS plans, empowering them to engage more fully in their communities. Our experienced Support Coordinators work closely with you to ensure you receive the right supports to achieve your goals."
  const highlightedWords = ['We Care Community', 'Medium Term Accommodation', 'MTA', 'NDIS funding available for up to 90 days', 'temporary accommodation', 'Get in touch with us today ',
 "Comfortable and Safe Space",
 "Short-Term Care",
 "Flexible NDIS Funding",
 "Tailored Support",
 "Easy Transition",
 "Home Modifications in Progress",
 "SDA Placement Pending",
 "Transitioning from Hospital or Aged Care",
 "Support System Breakdown"
  ];
  const para2 = "To help you get the most from your NDIS plan, our service is designed to support both participants and their families. With years of experience, our Support Coordinators are here to guide you every step of the way, offering advice, advocacy, and practical support."
  const para3 = "If you need assistance creating or understanding your NDIS plan, we’re here to help. At We Care Community, our top priority is supporting you to pursue your goals, make informed decisions, and design a plan that reflects your individual needs and lifestyle. We are committed to giving you the tools and confidence to define your own path and live life your way."
  const imgTitle = "Cordination of Support COS"
  const planTitle = "How Our Support Coordinator can assist you"
  const providerTitle = "Service Providers";
  const planItems = [
  "Establish connections between you and community, mainstream, and government services.",
  "Help you develop the ability to make your own decisions.",
  "Connect you with service providers.",
  "Facilitate preparation for your NDIS plan review.",
  "Maximise the value of your funded supports by optimising your NDIS plan.",
  "Respond to emergencies, help you overcome obstacles, and build your resilience.",
];

 const providerItems = [
  "Find service providers who can offer the assistance you require.",
  "Negotiate prices and terms with service providers.",
  "Collaborate with NDIS service providers to establish service agreements.",
  "Coordinate the arrangement of various services.",
];
  return (
    <>
      <Hero heading={heading} para={para} />
      <ServiceTemplate heading={heading1} para1={para1} para2={para2} para3={para3} imgTitle={imgTitle} img={img} planItems={planItems} providerItems={providerItems} planTitle={planTitle} providerTitle={providerTitle} highlightedWords={highlightedWords} />
    </>
  )
}

export default SupportCoordination
