import React from "react";
// import ImageSlider from "../ImageSlider/ImageSlider";
import ImageSlider from "../imageSlider/ImageSlider";

const getHighlightedText = (text, wordsToHighlight) => {
  if (!wordsToHighlight) return text;
  const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    wordsToHighlight.some(
      (word) => word.toLowerCase() === part.toLowerCase()
    ) ? (
      <span key={i} className="font-bold text-gray-600">
        {part}
      </span>
    ) : (
      part
    )
  );
};

function ServiceTemplate({
  heading,
  para1,
  para2,
  para3,
  imgTitle,
  img,
  planItems,
  providerItems,
  planTitle,
  providerTitle,
  highlightedWords,
}) {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col   max-auto item-center lg:flex-row gap-8 justify-center">
          <div className="relative overflow-hidden">
            {/* <ImageSlider imgTitle={imgTitle} img={img} className=" w-100% object-cover rounded-[40px] " /> */}
            <ImageSlider
              imgTitle={imgTitle}
              images={Array.isArray(img) ? img : [img]}
              height="h-[400px] md:h-[500px] lg:h-[600px]" // horizontal rectangle
            />
          </div>
          <div className="flex-1 space-y-8">
            <header>
              <h1 className="text-4xl   sm:text-5xl font-serif font-bold text-gray-800 whitespace-pre-line ">
                {heading}
              </h1>
            </header>
            <article className="space-y-6 text-gray-600  leading-relaxed ">
              <p>{getHighlightedText(para1, highlightedWords)}</p>
              <p>{getHighlightedText(para2, highlightedWords)}</p>
              <p>{getHighlightedText(para3, highlightedWords)}</p>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
        {/* Divider (Semantic Tip: Use a div with aria-hidden since it's decorative) */}
        <div
          className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200"
          aria-hidden="true"
        >
          {/* Column 1: NDIS Plan Support */}
          <div className="pb-10 md:pb-0 md:pr-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">
              {planTitle}
            </h2>
            <ul className="space-y-6">
              {planItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-2xl text-gray-400 mt-[-2px]">→</span>
                  <p className="text-gray-600  leading-relaxed">
                    {getHighlightedText(item, highlightedWords)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Service Providers */}
          <div className="pt-10 md:pt-0 md:pl-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">
              {providerTitle}
            </h2>
            <ul className="space-y-6">
              {providerItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-2xl text-gray-400 mt-[-2px]">→</span>
                  <p className="text-gray-600  leading-relaxed">
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

export default ServiceTemplate;
