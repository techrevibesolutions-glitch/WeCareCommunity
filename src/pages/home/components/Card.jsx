import React from 'react';
import { ShieldCheck, Handshake, Lightbulb, Star } from 'lucide-react';
function Card({ icon: Icon, title, description, highlights })  {
  // Function to highlight specific words in the description
  const getHighlightedText = (text, wordsToHighlight) => {
    if (!wordsToHighlight) return text;
    const regex = new RegExp(`(${wordsToHighlight.join('|')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      wordsToHighlight.some(word => word.toLowerCase() === part.toLowerCase()) 
        ? <span key={i} className="font-bold text-[#1e3a8a]">{part}</span> 
        : part
    );
  };

  return (
    <div className="flex flex-col items-center p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-md transition-shadow duration-300 h-full text-center">
      {/* Icon Container */}
      <div className="mb-6 p-4 rounded-full bg-blue-50/50">
        <Icon size={40} className="text-[#2c59a3]" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        {getHighlightedText(description, highlights)}
      </p>
    </div>
  );}

export default Card;


