"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import portfolioData from "../data/portfolio";

const Portfolio = ({ handlePortfolioClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("portfolio");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="portfolio"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white to-gray-50"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-black opacity-5 rounded-full"></div>
        <div className="absolute bottom-1/3 right-0 w-48 h-48 bg-black opacity-5 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-black text-white text-sm font-medium rounded-full mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Portfolio Projects</h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-700`}
        >
          {portfolioData.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handlePortfolioClick(item)}
                    className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 btn-primary"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
