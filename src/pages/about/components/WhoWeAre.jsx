import React, { useState } from 'react';
import img from '../../../assets/hero/aboutus.png'

const WhoWeAre = () => {
    const [activeTab, setActiveTab] = useState('Our Story');

    const tabs = [
        { name: 'Our Mission',   content: (
                <>
                    <p className="mb-4">
                       Our goal at We Care Community is to give disabled people the tools they need to live full lives by giving them personalised support services that meet their specific needs. We want to build a community where everyone feels respected and included, encourage independence, and encourage acceptance of differences.
                    </p>
                    
                </>
            ) },
        { name: 'Our Vision',   content: (
                <>
                    <p className="mb-4">
                       At We Care Community, our aim is to make a world where everyone is welcome and everyone has the same opportunities to help and take part. We want to live in a world where people with disabilities are fully included in all parts of life, where there are no obstacles, and where everyone is helped to reach their full potential. We want to be a force for good in the disability support field and beyond by being committed to caring for people with compassion, making meaningful connections, and encouraging acceptance.
                   </p>
                </>
            ) },
        {
            name: 'Our Story',
            content: (
                <>
                    <p className="mb-4">
                        We Care Community, our story is one of passion, determination, and a promise to make a difference in the lives of disabled people. We have been serving the community with kindness and honesty for years because we believe that everyone should have the chance to live a full life. Our journey started with a simple but powerful idea: to help people live their best lives by giving them support services that are tailored to their individual needs.
                    </p>
                    <p>
                        We have grown and changed over the years, adding programs to help families, parents, kids, the elderly, and carers, as well as people with disabilities.
                    </p>
                </>
            )
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 bg-white font-sans text-slate-700 ">
            {/* Top Section: Heading and Image */}
            <div className="flex  flex-col lg:flex-row gap-12 items-center justify-center mb-16">
                <div className="lg:w-2/4">
                    <div className="border-l-4 border-blue-800 pl-6 mb-8">
                        <h2 className="text-4xl sm:text-5xl font-semibold text-slate-800">Who We Are</h2>
                    </div>
                    <div className="space-y-4 text-lg leading-relaxe mx-2">
                        <p>
                            Each individual in our community has own unique story that is shaped by their background, language, and experiences. We respect every aspect that makes our lives more interesting and celebrate it. We create a supportive space where people can grow and make a difference in the world by promoting connections and encouraging participation.
                        </p>
                        <p>
                            We Care Community believe in the power of diversity and the strength that comes from building meaningful connections within our community. Our purpose is clear: we focus on you, so you can focus on what matters most in your life.
                        </p>
                    </div>
                </div>

                <div className="lg:w-2/4">
                    <img
                        src={img}
                        alt="Support workers helping a person"
                        className="rounded-lg shadow-sm w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Tabs Section */}
            <div className="max-w-5xl mx-auto">
                {/* Tab Buttons Container */}
                <div className="bg-slate-100 rounded-full p-1 flex justify-between items-center mb-8 relative">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`relative z-10 flex-1 py-3 px-6 text-xl font-medium transition-all duration-300 rounded-full ${activeTab === tab.name
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'text-slate-800 hover:text-blue-600'
                                }`}
                        >
                            {tab.name}
                            {/* Little triangle arrow for the active tab */}
                            {activeTab === tab.name && (
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rotate-45 z-[-1]"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="px-6 text-lg leading-relaxed text-slate-600 transition-opacity duration-300">
                    {tabs.find(t => t.name === activeTab)?.content}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;