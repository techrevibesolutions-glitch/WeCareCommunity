import React from 'react'
import Hero from '../../../globalComponent/herosection/Hero'
import ServiceTemplate from '../../../globalComponent/seviceTem/ServiceTemplate';
import img from "../../../assets/hero/mediumTerm.jpg"
function MediumTerm() {
  const heading = "Medium-Term Accommodation MTA"
  const heading1 = "Medium-Term\nAccommodation MTA"
  const para = ""
  const para1 = "At We Care Community, we provide Medium Term Accommodation (MTA) for individuals who need a safe and comfortable place to stay while waiting for a long-term housing solution. Whether you’re transitioning between homes, waiting for home modifications, or need temporary care, our MTA services ensure you have the right support in a welcoming environment."
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
  const para2 = "With NDIS funding available for up to 90 days, our MTA services offer a flexible and stress-free solution. We tailor our support to meet your personal needs, ensuring you feel comfortable, independent, and well cared for. From daily assistance to a supportive community, we’re here to help you through your transition."
  const para3 = "If you or your loved one needs temporary accommodation, We Care Community is here for you. Get in touch with us today to learn more about our MTA services and how we can assist you in finding the perfect place to stay."
  const imgTitle = "Medium Term Accomodation MTA"
  const planTitle = "What We Offer"
  const providerTitle = "Service Right For You"
  const planItems = [
    "Comfortable and Safe Space: A secure and welcoming place for individuals who need temporary housing for a few weeks or months.",

    "Short-Term Care: Whether you’re transitioning between homes or need temporary support, we ensure you have everything you need to feel comfortable.",

    "Flexible NDIS Funding: Funding available for up to 90 days, providing you with a flexible and stress-free solution.",

    "Tailored Support: Our MTA services are customized to meet your unique needs, helping you transition smoothly to the next phase of your journey.",

    "Easy Transition: A supportive space designed to help you feel at ease and prepared for your long-term living arrangement.",
  ];
  const providerItems = [
    "Home Modifications in Progress: If you’re waiting for necessary adjustments to your home to meet your needs.",
    "SDA Placement Pending: If you’re waiting for a confirmed Specialist Disability Accommodation (SDA) option to become available.",
    "Transitioning from Hospital or Aged Care: If you’ve recently been discharged from hospital or aged care and need a temporary home.",
    "Support System Breakdown: If your current living situation is no longer safe or suitable due to a breakdown in support services.",
  ];
  return (
    <>
      <Hero heading={heading} para={para} />
      <ServiceTemplate heading={heading1} para1={para1} para2={para2} para3={para3} imgTitle={imgTitle} img={img} planItems={planItems} providerItems={providerItems} planTitle={planTitle} providerTitle={providerTitle} highlightedWords={highlightedWords} />
    </>
  )
}

export default MediumTerm