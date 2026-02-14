import React from "react";
import { ShieldCheck, Handshake, Lightbulb, Star } from 'lucide-react';
import Card from "./components/Card";
import WhoWeCare from "./components/WhoWeCare";
import HomeService from "./components/HomeService";
import NDISProcess from "./components/NDISprocess";
import JourneyCTA from "./components/JourneyCTA";
import Hero from "./components/Hero";
import TestimonialSlider from "./components/TestimonialSlider";

function Home() {
     const values = [
    {
      title: "Integrity",
      icon: ShieldCheck,
      description: "We are dedicated to delivering honest, transparent, and ethical care that prioritizes the well-being of our participants.",
      highlights: ["honest,", "transparent,", "and ethical"]
    },
    {
      title: "Respect",
      icon: Handshake,
      description: "We foster an environment where individuals feel heard, valued, and empowered to make their own choices.",
      highlights: ["heard,", "valued,", "and empowered"]
    },
    {
      title: "Collaboration",
      icon: Lightbulb,
      description: "We work in partnership with participants, families, caregivers, and allied and healthcare professionals to create a holistic, personalized network of support.",
      highlights: []
    },
    {
      title: "Excellence",
      icon: Star,
      description: "We continuously strive for excellence in everything we do, ensuring that individuals receive the best possible services",
      highlights: []
    }
  ];
  return(
 <>
 <Hero/>
    {/* card section */}
    <section className="py-6 bg-white px-6 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, index) => (
            <Card 
              key={index}
              title={val.title}
              icon={val.icon}
              description={val.description}
              highlights={val.highlights}
            />
          ))}
        </div>
      </div>
    </section>
    {/* who we are section */}
    <WhoWeCare /> 
    <HomeService/>
    <NDISProcess/>
    <JourneyCTA/>

</>
  );
}

export default Home;