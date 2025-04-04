"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Auto-advance carousel
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: "Fashion Design", level: 90 },
    { name: "Creative Direction", level: 85 },
    { name: "Pattern Making", level: 80 },
    { name: "Textile Design", level: 75 },
    { name: "Fashion Illustration", level: 90 },
    { name: "Brand Development", level: 85 },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Summer Collection 2023",
      category: "Fashion Design",
      image: "/images/portfolio-1.svg",
    },
    {
      id: 2,
      title: "Sustainable Fashion Line",
      category: "Eco-Friendly",
      image: "/images/portfolio-2.svg",
    },
    {
      id: 3,
      title: "Avant-Garde Exhibition",
      category: "Artistic Direction",
      image: "/images/portfolio-3.svg",
    },
    {
      id: 4,
      title: "Streetwear Collaboration",
      category: "Brand Partnership",
      image: "/images/portfolio-4.svg",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Magazine Editor",
      text: "Daniyal's work is truly innovative. His attention to detail and creative vision sets him apart in the industry.",
      image: "/images/testimonial-1.svg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Fashion Retailer",
      text: "Working with Daniyal was a pleasure. His designs are not only beautiful but also commercially viable.",
      image: "/images/testimonial-2.svg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Fashion Blogger",
      text: "Daniyal's sustainable approach to fashion is inspiring. He's a true visionary in the industry.",
      image: "/images/testimonial-3.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animation */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className={`fade-in ${
                isVisible ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000`}
            >
              <h1 className="heading-1 mb-6">Muhammad Daniyal Faheem</h1>
              <p className="text-xl text-gray-600 mb-8">
                Fashion Designer & Creative Director
              </p>
              <p className="text-lg mb-8">
                Passionate about creating innovative designs that push the
                boundaries of contemporary fashion. Specializing in creative
                direction and sustainable fashion practices.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="btn-primary hover:scale-105 transition-transform"
                >
                  Get in Touch
                </a>
                <a
                  href="#portfolio"
                  className="btn-secondary hover:scale-105 transition-transform"
                >
                  View Portfolio
                </a>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/profile.svg"
                alt="Muhammad Daniyal Faheem"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Animation */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="slide-in-left">
              <h3 className="heading-3 mb-4">Education & Background</h3>
              <p className="text-lg mb-6">
                Bachelor of Fashion graduate with a passion for innovative
                design and sustainable fashion practices. My approach combines
                traditional techniques with modern aesthetics, creating unique
                pieces that tell a story.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Education</h4>
                  <p>Bachelor of Fashion</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Specialization</h4>
                  <p>Fashion Design & Creative Direction</p>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <h3 className="heading-3 mb-4">My Journey</h3>
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gray-200"></div>
                <div className="space-y-8 pl-4">
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-black rounded-full -ml-2"></div>
                    <h4 className="font-semibold">2023</h4>
                    <p>Launched my sustainable fashion collection</p>
                  </div>
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-black rounded-full -ml-2"></div>
                    <h4 className="font-semibold">2022</h4>
                    <p>Graduated with honors in Fashion Design</p>
                  </div>
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-black rounded-full -ml-2"></div>
                    <h4 className="font-semibold">2021</h4>
                    <p>Internship at leading fashion house</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-black h-2.5 rounded-full transition-all duration-1000 ease-out skill-bar-fill"
                    style={{
                      width: `${skill.level}%`,
                      "--skill-level": `${skill.level}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-black hover:bg-gray-50 p-4 rounded-lg transition-colors">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-black rounded-full"></div>
                <h3 className="heading-3">Creative Director</h3>
                <p className="text-gray-600">Fashion House • 2022 - Present</p>
                <p className="mt-2">
                  Leading creative direction for seasonal collections,
                  overseeing design teams, and establishing brand identity.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-black hover:bg-gray-50 p-4 rounded-lg transition-colors">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-black rounded-full"></div>
                <h3 className="heading-3">Fashion Designer</h3>
                <p className="text-gray-600">Design Studio • 2020 - 2022</p>
                <p className="mt-2">
                  Created innovative designs for various clients, developed
                  patterns, and managed production processes.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-black hover:bg-gray-50 p-4 rounded-lg transition-colors">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-black rounded-full"></div>
                <h3 className="heading-3">Design Intern</h3>
                <p className="text-gray-600">Fashion Brand • 2019 - 2020</p>
                <p className="mt-2">
                  Assisted senior designers, learned industry practices, and
                  contributed to seasonal collections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section with Cards */}
      <section id="portfolio" className="section-padding">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group card-hover"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 btn-primary">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500">{item.category}</span>
                  <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center">What Clients Say</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <div className="flex items-center mb-6">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-lg italic">"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeSlide === index ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="heading-3 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p>
                    <strong>Email:</strong>
                    <br />
                    <a
                      href="mailto:daniyalfaheem@gmail.com"
                      className="text-black hover:underline"
                    >
                      daniyalfaheem@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>
                    <br />
                    <a
                      href="tel:+44744089099099"
                      className="text-black hover:underline"
                    >
                      +44 7440 8909 9099
                    </a>
                  </p>
                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">Social Media</h4>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="text-black hover:text-gray-600 transition-colors"
                      >
                        Instagram
                      </a>
                      <a
                        href="#"
                        className="text-black hover:text-gray-600 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
