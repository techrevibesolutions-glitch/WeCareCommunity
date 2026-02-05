import React from "react";
import img1 from "../../assets/house/1.jpg"; // your image

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

// Function to wrap highlighted words
const getHighlightedText = (text, words) => {
  if (!words) return text;
  const regex = new RegExp(`(${words.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    words.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="font-semibold text-gray-800">
        {part}
      </span>
    ) : (
      part
    )
  );
};

function SupportCordination() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
        {/* LEFT: Image */}
        <div className="w-full lg:w-1/2 rounded-[40px] overflow-hidden">
          <img
            src={img1}
            alt="Short-Term Accommodation"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
        </div>

        {/* RIGHT: Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-gray-700">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800">
            Short-Term Accommodation (STA)
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
  );
}

export default SupportCordination;
