import React from "react";
import Hero from "../../../globalComponent/herosection/Hero";
import ServiceTemplate from "../../../globalComponent/seviceTem/ServiceTemplate";
// import img from "../../../assets/hero/supportInDepen.jpg";

import img1 from "../../../assets/house/1.jpg";
import img2 from "../../../assets/house/2.jpg";
import img3 from "../../../assets/house/3.jpg";
import img4 from "../../../assets/house/4.jpg";
import img5 from "../../../assets/house/5.jpg";
import img6 from "../../../assets/house/6.jpg";
import img7 from "../../../assets/house/7.jpg"

import SimpleSlider from "../../../globalComponent/imageSlider/SimpleSlider";

function SupportInDependLive() {
  const heading = "Support Independent Living SIL";
  const heading1 = "Support Independent \nLiving  SIL";
  const para =
    "Our Supported Independent Living (SIL) services provide a safe, comfortable, and supportive environment.";
  const para1 =
    "At We Care Community, we believe that everyone deserves the opportunity to live independently with the right support. Supported Independent Living (SIL) is an NDIS-funded service designed to help people with disabilities live comfortably in their own homes while receiving 24/7 support for daily tasks";
  const para2 =
    "Our Supported Independent Living (SIL) services provide a safe, comfortable, and supportive environment where participants can build life skills, maintain their daily routines, and achieve their personal goals.";
  const para3 =
    " Whether you prefer to live independently or with housemates, We Care Community helps you find the living arrangement that best suits your needs and lifestyle. If you already have a home, we offer in-home support to ensure you have everything you need to thrive. If you’re looking for a place to stay, we can assist in finding a suitable home and even match you with housemates who share similar interests, so you feel comfortable and supported in your new living environment.";
  const imgTitle = "Cordination of Support COS";
  const planTitle = "What We Offer";
  const providerTitle = "Service Providers";
  const highlightedWords = [
    "We Care Community",
    "Supported Independent Living SIL",
    "24/7 support",
    "Safe & Comfortable Accommodation ",
    "Skill Development",
    "Short-Term Care",
    "Community Participation",
    "Personalized Support",
    "Personalized Care Plans",
    "Greater Freedom",
    "Building Connections",
    "Achieving Goals",
    "Compassionate Care",
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
      <Hero heading={heading} para={para} />
      <ServiceTemplate
        heading={heading1}
        para1={para1}
        para2={para2}
        para3={para3}
        imgTitle={imgTitle}
        img={[img7]}
        planItems={planItems}
        providerItems={providerItems}
        planTitle={planTitle}
        providerTitle={providerTitle}
        highlightedWords={highlightedWords}
      />

<section className="md:py-5 bg-gray-50">
  <SimpleSlider images={[img1, img2, img3, img4, img5, img6]} />
</section>

    </>
  );
}

export default SupportInDependLive;
