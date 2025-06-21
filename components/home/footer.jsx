"use client";

import React, { useState } from "react";
import {
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Globe,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  // Social media data
  const socialMediaLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: MessageCircle, href: "#" },
    { icon: Globe, href: "#" },
  ];

  // Navigation sections data
  const navigationSections = [
    {
      title: "Discover",
      links: [
        { text: "About us", href: "#" },
        { text: "Stay", href: "#" },
        { text: "Tours", href: "#" },
        { text: "Contact", href: "#" },
      ],
    },
    {
      title: "Travel",
      links: [
        { text: "Destinations", href: "#" },
        { text: "Hotels", href: "#" },
        { text: "Villas", href: "#" },
        { text: "Explore UK", href: "#" },
      ],
    },
    {
      title: "Languages",
      links: [
        { text: "English", href: "#" },
        { text: "Arabic", href: "#" },
        { text: "French", href: "#" },
      ],
    },
  ];

  // Footer bottom links
  const footerLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Cookie Policy", href: "#" },
    { text: "Imprint", href: "#" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo and Description Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-8">
              <div className="flex items-center space-x-3">
                <div className="text-white font-bold text-2xl">
                  ≡DB≡
                  <div className="text-xs tracking-widest">GO</div>
                </div>
                <div className="text-white">
                  <div className="text-lg font-medium">TOURISTS TRAVEL</div>
                  <div className="text-sm opacity-80">
                    BUREAU <span className="text-xs">UK LTD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-2 mb-8">
              {socialMediaLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-white transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the world's most captivating places, from hidden gems to
              popular hotspots. Explore our curated selection of destinations
              that inspire adventure and wanderlust. Start planning your next
              journey today!
            </p>
          </div>

          {/* Navigation Columns */}
          {navigationSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white text-lg font-medium mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter and CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 pt-12 border-t border-gray-800">
          {/* Explore Destinations Button */}
          <div>
            <button className="w-full bg-white text-black py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Explore Destinations
            </button>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your e-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border border-gray-600 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
            />
            <button
              onClick={handleSubscribe}
              className="bg-white text-black py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors font-medium whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © Copyright Tourists Travel Bureau UK LTD. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
