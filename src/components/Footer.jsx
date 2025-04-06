"use client";

import React from "react";
import Link from "./Link";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaHeart,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black text-white py-12 md:py-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white opacity-5 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Muhammad Daniyal Faheem</h3>
            <p className="text-gray-400 mb-6">
              Fashion Buyer & Sourcing Specialist with expertise in trend
              forecasting, merchandising, and sustainable fashion.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/muhammaddaniyalfashion/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/daniyalfaheem/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-gray-400" />
                <a
                  href="mailto:daniyalfaheem6666@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  daniyalfaheem6666@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2 text-gray-400" />
                <a
                  href="tel:+447404072424"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +44 7404 072424
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaWhatsapp className="mr-2 text-gray-400" />
                <a
                  href="https://wa.me/447404072424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {currentYear} Muhammad Daniyal Faheem. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> by{" "}
            <a
              href="https://wa.me/+44 7443 098117"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-1"
            >
              Awais Ahmad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
