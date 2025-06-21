"use client";

import React from "react";

const ExploreWorldsSection = () => {
  const destinations = [
    {
      id: 1,
      title: "The Greenwich Hotel",
      location: "New York",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Gundari",
      location: "Folegandros, Greece",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "Casa Ixchi",
      location: "Mérida, Mexico",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=400&fit=crop&auto=format",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          {/* Mobile and Tablet Layout */}
          <div className="lg:hidden">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6">
              Explore Worlds
              <br />
              <span className="italic">Beyond Imagination</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Step into a world where wonders come alive. From hidden valleys to
              untouched sacred sites, all worthwhile destinations chosen to
              ignite your next great adventure.
            </p>

            {/* Navigation Hint */}
            <div className="text-gray-400 text-sm">
              <span>Drag to navigate</span>
            </div>
          </div>

          {/* Desktop Layout (lg and above) */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
            {/* Left Side - Description (takes 4 columns) */}
            <div className="lg:col-span-4">
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Step into a world where wonders come alive. From hidden valleys
                to untouched sacred sites, all worthwhile destinations chosen to
                ignite your next great adventure.
              </p>
            </div>

            {/* Center - Main Heading (takes 6 columns) */}
            <div className="lg:col-span-6">
              <h2 className="text-6xl font-light text-gray-900 leading-tight text-center">
                Explore Worlds
                <br />
                <span className="italic">Beyond Imagination</span>
              </h2>
            </div>

            {/* Right Side - Navigation Hint (takes 2 columns) */}
            <div className="lg:col-span-2 lg:text-right">
              <span className="text-gray-400 text-sm">Drag to navigate</span>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className={`group cursor-pointer ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20"></div>

                {/* Text Overlay */}
                <div className="absolute inset-6 flex flex-col justify-between text-white">
                  <div>
                    <h3 className="text-lg md:text-xl font-light">
                      {destination.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">{destination.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Text Section */}
        <div className="flex justify-end">
          <div className="max-w-4xl mb-16 lg:mb-20">
            <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
              Travel isn't just about ticking off milestones or showcasing
              adventures — it's a powerful, transformative journey. It doesn't
              change who we are, but deepens our connections, broadens our view,
              and{" "}
              <span className="text-gray-500">
                reminds us that understanding the world starts with embracing
                its complexity, both near and far.
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Divider Line */}
        <div className="w-full">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default ExploreWorldsSection;
