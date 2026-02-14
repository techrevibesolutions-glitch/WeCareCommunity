// import React from 'react'
// import Hero from '../../../globalComponent/herosection/Hero';
// import ServiceTemplate from '../../../globalComponent/seviceTem/ServiceTemplate';
// import img from "../../../assets/hero/shortTerm.jpg";
// function ShortTerm() {
//   const heading ="Short Term Accommodation"
//   const heading1 = "Short-Term \n Accommodation STA"
//   const para = "STA lets you try new activities, meet new people, and learn new skills, while also giving your family or carers a much-needed break."
//   const para1 = "At We Care Community, we understand that sometimes you need a break from your daily routine. That's why we offer Short-Term Accommodation (STA), a flexible and affordable service that provides temporary support to help you manage daily tasks and maintain your routine."
//   const para2 = "Short Term Accommodation (STA) gives people with disabilities the chance to stay away from home for a short time. This service replaces what was previously known as respite. STA lets you try new activities, meet new people, and learn new skills, while also giving your family or carers a much-needed break."
//   const para3 = "We make sure that all our properties are welcoming, comfortable, and fully equipped for people with disabilities. Our dedicated team is here to support you with meal planning and preparation, help with personal care like showering, dressing, and hygiene, and ensure your medications are taken as prescribed, so you can feel comfortable and well taken care of during your stay."
//   const imgTitle = "Short Term Accommodation STA"
//   const planTitle = "What We Offer"
//   const providerTitle = "Service Providers"
//   const highlightedWords = [
//     "We Care Community",
//     "Short Term Accommodation ",
//     "comfortable, temporary home",
//     "Safe & Comfortable Accommodation",
//     "Skill Development",
//     "24/7 Support",
//     "Short-Term Care",
//     "Community Participation",
//     "Personalized Support",
//     "Personalized Care Plans",
//     "Greater Freedom",
//     "Building Connections",
//     "Achieving Goals",
//     "Compassionate Care"
//   ];
//   const planItems = [
//    "24/7 Support – Assistance with personal care, household tasks, and daily activities.",
//    "Safe & Comfortable Accommodation – A welcoming home designed to meet individual needs.",
//    "Skill Development – Support in cooking, cleaning, budgeting, and social engagement.",
//    "Community Participation – Encouraging involvement in local events and activities.",
//    "Personalized Care Plans – Tailored support to promote independence and well-being.",
//   ];
//   const providerItems = [
//    "Personalized Support: We take the time to understand your unique needs and tailor our services accordingly.",
//    "Compassionate Care: Our dedicated team provides person-centered support, ensuring you feel valued and supported.",
//    "Greater Freedom: We empower you to live with greater independence and make choices that align with your goals.",
//    "Building Connections: We help you create meaningful friendships and engage in social opportunities.",
//    "Achieving Goals: Our focus is on helping you reach your personal goals and live the life you want.",
//   ];
//   return (
//     <>
//     <Hero heading={heading} para={para}/>
//     <ServiceTemplate heading={heading1} para1={para1} para2={para2} para3={para3} imgTitle={imgTitle} img={img} planItems={planItems} providerItems={providerItems} planTitle={planTitle} providerTitle={providerTitle} highlightedWords={highlightedWords} />
//     </>
//   )
// }

// export default ShortTerm




import React from "react";
import img from "../../../assets/house/1.jpg";
import Hero from "../../../globalComponent/herosection/Hero";


const heading = "Short Term Accommodation"
const para = "STA lets you try new activities, meet new people, and learn new skills, while also giving your family or carers a much-needed break."

const highlightedWords = [
  "We Care Community",
  "Short Term Accommodation",
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
  "Personalized Care Plans – Tailored support to promote independence and well-being."
];

const providerItems = [
  "Personalized Support: We take the time to understand your unique needs and tailor our services accordingly.",
  "Compassionate Care: Our dedicated team provides person-centered support, ensuring you feel valued and supported.",
  "Greater Freedom: We empower you to live with greater independence and make choices that align with your goals.",
  "Building Connections: We help you create meaningful friendships and engage in social opportunities.",
  "Achieving Goals: Our focus is on helping you reach your personal goals and live the life you want."
];

// Highlighting function
const getHighlightedText = (text, words) => {
  if (!words) return text;
  const regex = new RegExp(`(${words.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    words.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="font-bold text-gray-600">
        {part}
      </span>
    ) : (
      part
    )
  );
};

function ShortTerm() {
  return (
    <>
    <Hero heading={heading} para={para} />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Image */}
          <div className="w-full lg:w-1/2 rounded-[40px] overflow-hidden">
            <img
              src={img}
              alt="Short Term Accommodation"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-gray-700">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 whitespace-pre-line">
              Short-Term {"\n"}Accommodation STA
            </h1>

            <p>
              {getHighlightedText(
                "At We Care Community, we understand that sometimes you need a break from your daily routine. That's why we offer Short-Term Accommodation (STA), a flexible and affordable service that provides temporary support to help you manage daily tasks and maintain your routine.",
                highlightedWords
              )}
            </p>

            <p>
              {getHighlightedText(
                "Short Term Accommodation (STA) gives people with disabilities the chance to stay away from home for a short time. This service replaces what was previously known as respite. STA lets you try new activities, meet new people, and learn new skills, while also giving your family or carers a much-needed break.",
                highlightedWords
              )}
            </p>

            <p>
              {getHighlightedText(
                "We make sure that all our properties are welcoming, comfortable, and fully equipped for people with disabilities. Our dedicated team is here to support you with meal planning and preparation, help with personal care like showering, dressing, and hygiene, and ensure your medications are taken as prescribed, so you can feel comfortable and well taken care of during your stay.",
                highlightedWords
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Plan & Providers Section */}
      <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
        <div
          className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200"
          aria-hidden="true"
        >
          {/* Column 1: Plan Items */}
          <div className="pb-10 md:pb-0 md:pr-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">
              What We Offer
            </h2>
            <ul className="space-y-6">
              {planItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-2xl text-gray-400 mt-[-2px]">→</span>
                  <p className="text-gray-600 leading-relaxed">
                    {getHighlightedText(item, highlightedWords)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Providers */}
          <div className="pt-10 md:pt-0 md:pl-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">
              Service Providers
            </h2>
            <ul className="space-y-6">
              {providerItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-2xl text-gray-400 mt-[-2px]">→</span>
                  <p className="text-gray-600 leading-relaxed">
                    {getHighlightedText(item, highlightedWords)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShortTerm;
