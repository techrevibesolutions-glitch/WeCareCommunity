import React from 'react'
import Hero from '../../globalComponent/herosection/Hero'
import ServiceTemComponent from '../../globalComponent/seviceTem/ServiceTemComponent'
import ServiceTermSecondComp from '../../globalComponent/seviceTem/ServiceTermSecondComp'
import img1 from '../../assets/hero/1.jpg'
import img2 from '../../assets/hero/2.jpg'
import img3 from '../../assets/hero/5.jpg'
import img4 from '../../assets/hero/4.jpg'
import img5 from '../../assets/hero/supportcordination.png'


function Services() {
  const heading = "Our Services"
  const para = "We Care Community is dedicated to giving people with disabilities, their families, and their caretakers in the Sydney areas individualised, custom-made help."
  const para1 = "We Care Community Support Coordination is an important component of  Building budget.  Our goal is to help members get better at coordinating and adding support on their NDIS plans, which will encourage more people to get involved in their communities. Our Team who  work as Support Coordinators make sure that you get the help you need to reach your goals."
  const para2 = "At We Care Community, our STA services offer a comfortable, temporary home where you can relax, enjoy fun activities, and make new friends. We’ll take care of all your support needs, so you can enjoy your stay while your carers get the rest they deserve. It’s a win-win for everyone."
  const para3 = "At We Care Community, we believe that everyone deserves the opportunity to live independently with the right support. Supported Independent Living (SIL) is an NDIS-funded service designed to help people with disabilities live comfortably in their own homes while receiving 24/7 support for daily tasks."
  const para4 = "At We Care Community, we provide Medium Term Accommodation (MTA) for individuals who need a safe and comfortable place to stay while waiting for a long-term housing solution. Whether you’re transitioning between homes, waiting for home modifications, or need temporary care, our MTA services ensure you have the right support in a welcoming environment."
  const para5 = "At We Care Community, we understand that your home is where you feel safest and most comfortable. Our in-home care services are designed to support your independence while ensuring you get the help you need with daily tasks. Whether you require ongoing assistance or just occasional support, we offer flexible services to suit your lifestyle. Our goal is to help you maintain your routine, stay connected with your community, and enjoy life in a familiar environment."
  const imgTitle1="Support Coordination"
  const imgTitle2="Short Term Accomodation"
  const imgTitle3="Support Independent Living"
  const imgTitle4="Medium Term Accommodation (MTA) "
  const imgTitle5="In Home Care Support"
  const link1="/services/supportcoordination"
  const link2="/services/shortterm"
  const link3="/services/supportindependlive"
  const link4="/services/mediumterm"
  const link5="/services/inhomesupport"
  const highlightedWords = ["We Care Community", "Sydney", "individualised", "custom-made"];
  

  return (
    <>
    <Hero heading={heading} para={para}/>
    <ServiceTemComponent heading={imgTitle1} para={para1} img={img1} imgTitle={imgTitle1} highlightedWords={highlightedWords} link={link1}/>
    <ServiceTermSecondComp heading={imgTitle2} para={para2} img={img2} imgTitle={imgTitle2} highlightedWords="" link={link2}/>
     <ServiceTemComponent heading={imgTitle3} para={para3} img={img3} imgTitle={imgTitle3} highlightedWords="" link={link3}/>
    <ServiceTermSecondComp heading={imgTitle4} para={para4} img={img4} imgTitle={imgTitle4} highlightedWords="" link={link4}/>
     <ServiceTemComponent heading={imgTitle5} para={para5} img={img5} imgTitle={imgTitle5} highlightedWords={[]} link={link5}/>
    </>
  )
}

export default Services
