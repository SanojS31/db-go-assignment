"use client";

import React from "react";

const ArticlesSection = () => {
  const articles = [
    {
      id: 1,
      category: "Travel Guide",
      date: "May 18, 2025",
      title:
        "10 Affordable trips you can book through CHECK24 — with Tourists Travel Bureau UK Ltd",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&auto=format",
    },
    {
      id: 2,
      category: "Travel Guide",
      date: "May 18, 2025",
      title:
        "The most beautiful beaches in the World — your dream vacation with Tourists Travel Bureau UK Ltd",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&auto=format",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-0">
            Article's
          </h2>

          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-full transition-colors duration-300 text-sm font-medium self-start sm:self-auto">
            Read more →
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article key={article.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30"></div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                    {article.category} | {article.date}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="space-y-4">
                <h3 className="text-lg font-light text-gray-900 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {article.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
