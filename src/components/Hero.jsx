"use client";

import React from "react";
import Image from "next/image";
import Link from "./Link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Hero = ({ setIsCVModalOpen }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-24 md:pt-32 pb-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-black opacity-5 rounded-full"></div>
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-black opacity-5 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black opacity-5 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <div className="inline-block mb-4 px-4 py-1 bg-black text-white text-sm font-medium rounded-full">
              Fashion Buyer & Sourcing Specialist
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Muhammad Daniyal <span className="text-gray-600">Faheem</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              A fashion buying aspirant with professional experience in retail
              operations, merchandising, and sourcing. Providing analytical
              expertise, trend predicting skills, and industrial manufacturing
              knowledge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="#contact" className="btn">
                Hire Me
              </Link>
              <button
                onClick={() => setIsCVModalOpen(true)}
                className="btn-secondary"
              >
                View My CV
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/daniyalfaheem_/"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Follow me on Instagram"
                >
                  <FaInstagram className="w-5 h-5" aria-hidden="true" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/muhammaddaniyalfashion/"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Connect with me on LinkedIn"
                >
                  <FaLinkedinIn className="w-5 h-5" aria-hidden="true" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
              <div className="h-px w-12 bg-gray-300"></div>
              <p className="text-sm text-gray-500">
                Available for opportunities
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-[300px] md:max-w-[400px] aspect-square mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-black rounded-full z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-black rounded-full z-0"></div>

              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl z-10 border-4 border-white">
                <Image
                  src="/dp.png"
                  alt="Muhammad Daniyal Faheem"
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 300px, 400px"
                  className="hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
