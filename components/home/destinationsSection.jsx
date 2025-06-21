"use client";

import React, { useState } from "react";
import { tabs, destinations } from "@/constants/default";

const DestinationsSection = () => {
  const [activeTab, setActiveTab] = useState("United Kingdom");

  return (
    <section className="bg-gray-50 pb-16 md:pb-20 lg:pb-24">
      {/* Tabs Navigation */}
      <div className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-white rounded-lg shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-6 py-5 text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-8">
            Discover the
            <br />
            <span className="italic">Wonder of {activeTab}</span>
          </h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations[activeTab].map((destination) => (
            <div key={destination.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30"></div>

                {/* Text Overlay */}
                <div className="absolute top-6 left-6 text-white">
                  <h3 className="text-lg md:text-xl font-light mb-1">
                    {destination.title}
                  </h3>
                  <p className="text-sm opacity-90">{destination.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
