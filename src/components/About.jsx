import React, { useState, useEffect } from "react";

const About = () => {
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

    const element = document.getElementById("about");
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
      id="about"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-black opacity-5 rounded-full"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-black opacity-5 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-black text-white text-sm font-medium rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            My Background & Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education & Background */}
          <div
            className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-200">
              Education & Background
            </h3>
            <p className="text-lg mb-8 text-gray-700">
              Bachelor of Fashion graduate with a passion for innovative design
              and sustainable fashion practices. My approach combines
              traditional techniques with modern aesthetics, creating unique
              pieces that tell a story.
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors transform hover:scale-[1.02] duration-300">
                <h4 className="font-bold text-xl mb-2 text-gray-800">
                  Education
                </h4>
                <p className="text-gray-700">Bachelor of Fashion</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors transform hover:scale-[1.02] duration-300">
                <h4 className="font-bold text-xl mb-2 text-gray-800">
                  Specialization
                </h4>
                <p className="text-gray-700">
                  Fashion Design & Creative Direction
                </p>
              </div>
            </div>
          </div>

          {/* My Journey */}
          <div
            className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-200">
              My Journey
            </h3>
            <div className="flex flex-col space-y-8">
              <div className="flex">
                <div className="w-24 flex-shrink-0 flex justify-center">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-800 transition-colors transform hover:scale-110 duration-300 shadow-md">
                    2023
                  </div>
                </div>
                <div className="flex-grow bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors transform hover:scale-[1.02] duration-300 ml-4">
                  <h4 className="font-bold text-xl text-gray-800 mb-2">
                    Sustainable Fashion Collection
                  </h4>
                  <p className="text-gray-700">
                    Launched my sustainable fashion collection
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-24 flex-shrink-0 flex justify-center">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-800 transition-colors transform hover:scale-110 duration-300 shadow-md">
                    2022
                  </div>
                </div>
                <div className="flex-grow bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors transform hover:scale-[1.02] duration-300 ml-4">
                  <h4 className="font-bold text-xl text-gray-800 mb-2">
                    Fashion Design Graduation
                  </h4>
                  <p className="text-gray-700">
                    Graduated with honors in Fashion Design
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-24 flex-shrink-0 flex justify-center">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-800 transition-colors transform hover:scale-110 duration-300 shadow-md">
                    2021
                  </div>
                </div>
                <div className="flex-grow bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors transform hover:scale-[1.02] duration-300 ml-4">
                  <h4 className="font-bold text-xl text-gray-800 mb-2">
                    Fashion House Internship
                  </h4>
                  <p className="text-gray-700">
                    Internship at leading fashion house
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
