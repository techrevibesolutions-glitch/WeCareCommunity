import React from 'react'
import Hero from '../../../globalComponent/herosection/Hero'
import ServiceTemplate from '../../../globalComponent/seviceTem/ServiceTemplate';
import img from "../../../assets/hero/inHomesupport.jpg"
function InHomeSupport() {
  const heading = "In Home Support"
  const heading1 = "In Home Care"
  const para = "We provide in-home care to help you stay comfortable and independent in your own home."
  const para1 = "At We Care Community, we understand that your home is where you feel safest and most comfortable. Our in-home care services are designed to support your independence while ensuring you get the help you need with daily tasks. Whether you require ongoing assistance or just occasional support, we offer flexible services to suit your lifestyle. Our goal is to help you maintain your routine, stay connected with your community, and enjoy life in a familiar environment."
  const para2 = "We provide a wide range of services that can be tailored to meet your unique needs. This includes household chores like cleaning, laundry, and grocery shopping, as well as meal preparation to ensure you eat well every day. Our team can also assist with personal care, such as bathing, dressing, and medication reminders, to help you stay healthy and comfortable. If you need help maintaining your home, we offer gardening and home maintenance services to keep your living space clean and safe."
  const para3 = "Your well-being is our top priority, and we believe that everyone deserves to live with dignity and confidence. Our caring and experienced staff are here to provide friendly, reliable support while respecting your independence. You can choose the services that work best for you, whether it’s temporary help after an illness, daily assistance, or a long-term care plan. Whatever your needs, we’re here to make life easier and ensure you feel supported every step of the way."
  const imgTitle = "In Home Support"
  const planTitle = "How We Can Help"
  const providerTitle = "How to Access Our Services"
  const planItems = [ 
    "Household Tasks: Cleaning, laundry, grocery shopping, cupboard organizing, ironing, and changing bed linen.",
    "Meal Support: Preparing and cooking meals or helping arrange meal deliveries.",
    "Home & Garden Maintenance: Lawn mowing, gardening, and general home upkeep to keep your space safe and tidy.",
    "Safe and Reliable Travel: We help you get to medical appointments, school, or work with scheduled transport through your home care package.",
  ];

  const providerItems = [
    "Choose Your Services – Select individual services or bundle them for complete support.",
    "Flexible Options – Get the help you need, when you need it.",
    "We’re Here to Help – Our team is ready to guide you through the process.",
    "Have Questions? – Call us at 1800 371 070 for clarity and support.",
  ];
  const highlightedWords = [
    "We Care Community",
    "in-home care services",
    "household chores",
    "meal preparation",
    "household chores",
    "personal care",
    "Household Chores",
    "caring and experienced staff",
    "Personal Care",
    "Medication Reminders",
    "Gardening Services",
    "Home Maintenance",
    "Dignity and Confidence",
    "Flexible Care Plans",
    "Household Tasks",
    "Meal Support",
    "Home & Garden Maintenance",
    "Safe and Reliable Travel",
    "Flexible Options",
    "We’re Here to Help",
    "Have Questions?",
    "Choose Your Services",
    "Flexible Options",
    "We’re Here to Help",
    "Have Questions"
  ];
  return (
    <>
      <Hero heading={heading} para={para} />
      <ServiceTemplate heading={heading1} para1={para1} para2={para2} para3={para3} imgTitle={imgTitle} img={img} planItems={planItems} providerItems={providerItems} planTitle={planTitle} providerTitle={providerTitle} highlightedWords={highlightedWords} />
    </>
  )
}

export default InHomeSupport