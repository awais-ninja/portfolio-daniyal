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
            Profile & Education
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
              Fashion Merchandiser with vast expertise in both retail and
              production, focusing on merchandising planning, sourcing, product
              development, and vendor partnerships. Excellent analytical
              capabilities, industrial production abilities, and an extensive
              understanding of the supply chain. Experienced with global brands
              such as The North Face, Trespass, Richfield, and Jacob Smith, as
              well as a strong academic background in Fashion Management and
              Merchandising.
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors transform hover:scale-[1.02] duration-300">
                <h4 className="font-bold text-xl mb-2 text-gray-800">
                  Education
                </h4>
                <p className="text-gray-700 font-semibold">
                  De Montfort University | Leicester | England
                </p>
                <p className="text-gray-700">
                  BSc (Hons) Fashion Management (2024-2025)
                </p>
                <p className="text-gray-700">
                  Fashion Buying, Fashion Marketing, Fashion Merchandising,
                  Fashion Business Innovation & R&D
                </p>
                <p className="text-gray-700">
                  Asian Institute of Fashion Design | Karachi
                </p>
                <p className="text-gray-700">
                  Diploma in Fashion Marketing & Merchandising (2022-2024) |
                  CGPA: 3.16
                </p>
                <p className="text-gray-700">
                  Pakistan Hoisery Manufacturing Institute | Karachi
                </p>
                <p className="text-gray-700">Merchandising Course (2023)</p>
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
                    2024
                  </div>
                </div>
                <div className="flex-grow bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors transform hover:scale-[1.02] duration-300 ml-4">
                  <h4 className="font-bold text-xl text-gray-800 mb-2">
                    De Montfort University, Leicester
                  </h4>
                  <p className="text-gray-700">
                    BSc (Hons) Fashion Management (2024-2025)
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
                    Asian Institute of Fashion Design, Karachi
                  </h4>
                  <p className="text-gray-700">
                    Diploma in Fashion Marketing & Merchandising (2022-2024) |
                    CGPA: 3.16
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-24 flex-shrink-0 flex justify-center">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-800 transition-colors transform hover:scale-110 duration-300 shadow-md">
                    2023
                  </div>
                </div>
                <div className="flex-grow bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors transform hover:scale-[1.02] duration-300 ml-4">
                  <h4 className="font-bold text-xl text-gray-800 mb-2">
                    Pakistan Hoisery Manufacturing Institute, Karachi
                  </h4>
                  <p className="text-gray-700">
                    Merchandising Course (Certified by Sindh Textile Technical
                    Board)
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
