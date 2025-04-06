import React, { useState, useEffect } from "react";
import skillsData from "../data/skills";

const Skills = () => {
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

    const element = document.getElementById("skills");
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
      id="skills"
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
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & Proficiencies
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } transition-all duration-700`}
          >
            {skillsData.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                  <span className="text-gray-600 font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-black h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
