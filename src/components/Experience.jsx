import React, { useState, useEffect } from "react";
import experienceData from "../data/experience";

const Experience = () => {
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

    const element = document.getElementById("experience");
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
      id="experience"
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
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`space-y-8 ${
              isVisible ? "opacity-100" : "opacity-0"
            } transition-all duration-700`}
          >
            {experienceData.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative pl-8 border-l-2 border-black bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01] ${
                  isVisible ? "translate-x-0" : "translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-[-9px] top-6 w-4 h-4 bg-black rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-bold">{experience.title}</h3>
                  <span className="text-sm font-medium text-gray-500 mt-1 md:mt-0 bg-gray-100 px-3 py-1 rounded-full">
                    {experience.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-3 font-medium">
                  {experience.company} •{" "}
                  <span className="text-black">Role:</span> {experience.role}
                </p>
                <p className="mt-2 text-gray-700">{experience.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
