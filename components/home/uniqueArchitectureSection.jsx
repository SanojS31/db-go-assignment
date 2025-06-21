"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const UniqueArchitectureSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&auto=format",
      alt: "Modern villa terrace overlooking lake with mountains",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop&auto=format",
      alt: "Luxury villa interior with modern furniture",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&h=800&fit=crop&auto=format",
      alt: "Infinity pool with mountain lake views",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&h=800&fit=crop&auto=format",
      alt: "Modern architectural details and lighting",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop&auto=format",
      alt: "Evening terrace with ambient lighting",
    },
  ];

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
  };

  return (
    <section className="bg-white py-4 md:py-6 lg:py-8">
      <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header Content */}
        <div className="mb-4 lg:mb-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-4">
            Unique architecture and design
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl">
            The newly established Swiss luxury brand TTB is developing an
            exclusive villa retreat nestled in the world's most breathtaking
            location overlooking Lake Maggiore.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative overflow-hidden aspect-[16/6] bg-gray-100">
            {/* Images */}
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0 relative">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 h-3 bg-gray-800 rounded-full"
                    : "w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueArchitectureSection;
