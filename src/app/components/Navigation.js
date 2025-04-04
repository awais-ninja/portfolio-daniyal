"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-bold">
            Daniyal Faheem
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-black transition-colors"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#experience"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-gray-600 hover:text-black transition-colors"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#experience"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
