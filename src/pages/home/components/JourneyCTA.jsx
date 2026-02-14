import React from 'react';
import { Link } from 'react-router-dom';
const JourneyCTA = () => {
    return (
        <section className="w-full bg-linear-to-r from-[#d6e4f0] via-[#e2eaf4] to-[#d6e4f0] py-10 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">

                {/* Main Text */}
                <h2 className="text-xl md:text-2xl font-bold text-[#1a2b5a] text-center md:text-left tracking-tight">
                    Start Your Journey With We Care Community
                </h2>

                {/* Action Button */}
                <Link to="/referralform">
                <button className="bg-[#2d4699] hover:bg-[#1e3270] text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-300 uppercase text-xs tracking-[0.15em] whitespace-nowrap border-2 border-transparent hover:border-blue-300">
                    Get Involved
                </button>
                </Link>

            </div>
        </section>
    );
};

export default JourneyCTA;