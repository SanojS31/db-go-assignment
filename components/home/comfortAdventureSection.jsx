"use client";

import React from "react";

const ComfortAdventureSection = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="flex flex-col min-h-screen">
        {/* Text Content Section */}
        <div className="flex flex-col md:flex-row lg:justify-between px-6 md:px-12 lg:px-16 xl:px-20 pt-12">
          {/* Description */}
          <div className="mb-12 md:mb-0">
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
              Step into a world where wonders come alive. From hidden valleys to
              untouched shores, discover worthwhile destinations chosen to
              ignite your next great adventure.
            </p>
          </div>

          {/* Header */}
          <div className="mb-12 md:mb-0 md:mr-8 lg:mr-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-tight mb-8">
              Where Comfort
              <br />
              <span className="italic">Meet Adventure</span>
            </h1>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 min-h-96">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&auto=format')`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 md:px-12 lg:px-16 py-16 lg:py-20">
            {/* Subtitle */}
            <p className="text-white/90 text-lg md:text-xl mb-6 max-w-md text-center">
              Sleeps 2 adults — with a pool and outside shower
            </p>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight text-center">
              Pool Studio
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComfortAdventureSection;
