"use client";

import React, { useState } from "react";
import { ChevronDown, Search, Plane } from "lucide-react";
import HeroDropdown from "./heroDropdown";
import { dropdownOptions, dropdownConfigs } from "@/constants/default";

const SafariSearchSection = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedValues, setSelectedValues] = useState({
    destination: "Find a Hotel or Resort",
    checkIn: "Check in - Check out",
    guests: "1 Room - 2 Adults",
  });

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleOptionSelect = (dropdown, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [dropdown]: value,
    }));
    setActiveDropdown(null);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566296524462-e0a341bf65e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHplYnJhfGVufDB8MHwwfHx8MA%3D%3D')`,
        }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Plane Icon */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
          <Plane className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Search Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen max-w-7xl mx-auto px-4 md:px-8">
        {/* Search Form Card */}
        <div className="bg-white/15 w-full backdrop-blur-md rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl">
          {/* Form Title */}
          <h2 className="text-left text-white text-2xl md:text-3xl lg:text-4xl font-light mb-8">
            Find the best flights or hotels
          </h2>

          {/* Form Fields */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            {/* Dropdowns */}
            {dropdownConfigs.map((config) => (
              <HeroDropdown
                key={config.key}
                config={config}
                selectedValues={selectedValues}
                activeDropdown={activeDropdown}
                toggleDropdown={toggleDropdown}
                handleOptionSelect={handleOptionSelect}
                dropdownOptions={dropdownOptions}
              />
            ))}

            {/* Search Button */}
            <div className="md:col-span-3 lg:col-span-1">
              <button className="w-full bg-white text-gray-800 px-6 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-lg">
                <Search className="w-5 h-5" />
                <span>Find the Result</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Flying Birds (Optional Decorative Elements) */}
      <div className="absolute top-1/4 left-1/4 text-white/30">
        <svg width="20" height="15" viewBox="0 0 20 15" fill="currentColor">
          <path d="M2 7c0 0 4-4 8-4s8 4 8 4-4 4-8 4-8-4-8-4z" />
        </svg>
      </div>

      <div className="absolute top-1/3 right-1/3 text-white/20">
        <svg width="16" height="12" viewBox="0 0 20 15" fill="currentColor">
          <path d="M2 7c0 0 4-4 8-4s8 4 8 4-4 4-8 4-8-4-8-4z" />
        </svg>
      </div>

      <div className="absolute top-1/5 right-1/4 text-white/25">
        <svg width="18" height="13" viewBox="0 0 20 15" fill="currentColor">
          <path d="M2 7c0 0 4-4 8-4s8 4 8 4-4 4-8 4-8-4-8-4z" />
        </svg>
      </div>
    </section>
  );
};

export default SafariSearchSection;
