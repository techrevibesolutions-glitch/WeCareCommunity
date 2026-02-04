import React from 'react'
import Hero from '../../../globalComponent/herosection/Hero';
import ServiceTemplate from '../../../globalComponent/seviceTem/ServiceTemplate';
import img from "../../../assets/hero/shortTerm.jpg";
function ShortTerm() {
  const heading ="Short Term Accommodation"
  const heading1 = "Short-Term \n Accommodation STA"
  const para = "STA lets you try new activities, meet new people, and learn new skills, while also giving your family or carers a much-needed break."
  const para1 = "At We Care Community, we understand that sometimes you need a break from your daily routine. That's why we offer Short-Term Accommodation (STA), a flexible and affordable service that provides temporary support to help you manage daily tasks and maintain your routine."
  const para2 = "Short Term Accommodation (STA) gives people with disabilities the chance to stay away from home for a short time. This service replaces what was previously known as respite. STA lets you try new activities, meet new people, and learn new skills, while also giving your family or carers a much-needed break."
  const para3 = "We make sure that all our properties are welcoming, comfortable, and fully equipped for people with disabilities. Our dedicated team is here to support you with meal planning and preparation, help with personal care like showering, dressing, and hygiene, and ensure your medications are taken as prescribed, so you can feel comfortable and well taken care of during your stay."
  const imgTitle = "Short Term Accommodation STA"
  const planTitle = "What We Offer"
  const providerTitle = "Service Providers"
  const highlightedWords = [
    "We Care Community",
    "Short Term Accommodation ",
    "comfortable, temporary home",
    "Safe & Comfortable Accommodation",
    "Skill Development",
    "24/7 Support",
    "Short-Term Care",
    "Community Participation",
    "Personalized Support",
    "Personalized Care Plans",
    "Greater Freedom",
    "Building Connections",
    "Achieving Goals",
    "Compassionate Care"
  ];
  const planItems = [
   "24/7 Support – Assistance with personal care, household tasks, and daily activities.",
   "Safe & Comfortable Accommodation – A welcoming home designed to meet individual needs.",
   "Skill Development – Support in cooking, cleaning, budgeting, and social engagement.",
   "Community Participation – Encouraging involvement in local events and activities.",
   "Personalized Care Plans – Tailored support to promote independence and well-being.",
  ];
  const providerItems = [
   "Personalized Support: We take the time to understand your unique needs and tailor our services accordingly.",
   "Compassionate Care: Our dedicated team provides person-centered support, ensuring you feel valued and supported.",
   "Greater Freedom: We empower you to live with greater independence and make choices that align with your goals.",
   "Building Connections: We help you create meaningful friendships and engage in social opportunities.",
   "Achieving Goals: Our focus is on helping you reach your personal goals and live the life you want.",
  ];
  return (
    <>
    <Hero heading={heading} para={para}/>
    <ServiceTemplate heading={heading1} para1={para1} para2={para2} para3={para3} imgTitle={imgTitle} img={img} planItems={planItems} providerItems={providerItems} planTitle={planTitle} providerTitle={providerTitle} highlightedWords={highlightedWords} />
    </>
  )
}

export default ShortTerm