"use client";

import React, { useState } from "react";
import { ChevronDown, Search, X, Star } from "lucide-react";
import {
  topNavigationItems,
  dropdownOptions,
  dropdownConfigs,
  mainNavigationSections,
  menuSections,
  categoryIcons,
} from "@/constants/default";
import HeroDropdown from "./heroDropdown";

const HeroSection = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Top Navigation Items */}
      <div className="relative z-20 hidden lg:block">
        <div className="flex items-center justify-center space-x-6 xl:space-x-8 text-white text-xs xl:text-sm py-4 px-4">
          {topNavigationItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </div>
        {/* Border line */}
        <div className="border-b border-white/20"></div>
      </div>

      {/* Main Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-4 md:px-8 lg:px-12">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white relative z-30 cursor-pointer"
        >
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                isMobileMenuOpen
                  ? index === 0
                    ? "rotate-45 translate-y-1.5"
                    : index === 1
                    ? "opacity-0"
                    : "-rotate-45 -translate-y-1.5"
                  : ""
              }`}
            ></div>
          ))}
        </button>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-white font-bold text-2xl">
          ≡DB≡
          <div className="text-xs tracking-widest text-center">GO</div>
        </div>

        {/* Right Side Button */}
        <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 text-sm ml-auto">
          Book your Stay
        </button>
      </nav>

      {/* Sidebar for All Devices */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sidebar Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-full md:w-80 lg:w-[30rem] bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="cursor-pointer absolute top-6 right-6 text-gray-600 hover:text-gray-800 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Menu Content */}
          <div className="pt-20 px-6 h-full overflow-y-auto">
            {/* Menu's Label */}
            <p className="text-gray-400 text-sm mb-8">Menu's</p>

            {/* Main Navigation Sections */}
            <div className="space-y-8 mb-12">
              {mainNavigationSections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-light text-gray-900 mb-4 cursor-pointer hover:text-gray-600 transition-colors">
                    {section}
                  </h2>
                </div>
              ))}
            </div>

            {/* Two Column Section */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              {menuSections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href="#"
                        className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Reviews Section */}
            <div className="border-t pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    5.0/1,230 reviews
                  </span>
                </div>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-12 pt-20 pb-32">
        <div className="max-w-7xl w-full text-center">
          {/* Main Heading */}
          <div className="mb-16 text-left">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
              Step Into a<br />
              <span className="italic">World of Discovery</span>
            </h1>
          </div>

          {/* Centered Booking Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-full p-6 md:p-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
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
              <div className="md:col-span-1">
                <button className="w-full bg-white text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Find the Result</span>
                </button>
              </div>
            </div>
          </div>

          {/* Centered Category Icons */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 justify-center gap-8 text-white max-w-6xl mx-auto">
            {categoryIcons.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 cursor-pointer hover:text-gray-300 transition-colors"
                >
                  <IconComponent className="w-10 h-10" strokeWidth={1} />
                  <span className="text-center text-sm">{category.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
