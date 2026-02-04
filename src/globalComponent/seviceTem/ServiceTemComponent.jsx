import React from 'react'
import { Link } from 'react-router-dom'
function ServiceTemComponent({ heading, para, img, imgTitle, highlightedWords, link }) {
  const getHighlightedText = (text, wordsToHighlight) => {
    if (!wordsToHighlight) return text;
    const regex = new RegExp(`(${wordsToHighlight.join('|')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      wordsToHighlight.some(word => word.toLowerCase() === part.toLowerCase())
        ? <span key={i} className="font-bold text-gray-600">{part}</span>
        : part
    );
  };
  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className=" flex flex-col flex-1 lg:order-1 order-2">
          <h2 className="text-4xl sm:text-4xl font-serif font-bold text-gray-900 mb-8 leading-tight">
            {heading}
          </h2>

          <p className="text-gray-600 text-lg font-semibold leading-relaxed mb-10   md:text-left ">
            {getHighlightedText(para, highlightedWords)}
          </p>

          <Link to={link}>
            <button className="bg-[#2d4396] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors w-[70%]  md:w-[60%] lg:self-start self-center ">
              Learn More
            </button>
          </Link>
        </div>

        <div className="flex-1 lg:order-2 order-1 w-full">
          <img
            src={img}
            alt={imgTitle}
            className="rounded-[3rem] h-[300px] sm:h-[400px] object-cover object-center shadow-sm w-full"
          />
        </div>

      </div>
    </section>
  )
}

export default ServiceTemComponent