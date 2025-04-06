"use client";

import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";
import Image from "next/image";
import Link from "./Link";

const PortfolioDetails = ({ project }) => {
  // Add error handling for missing project data
  if (!project) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Project Not Found
        </h2>
        <p className="text-gray-600">
          The project details could not be loaded.
        </p>
      </div>
    );
  }

  const [activeImage, setActiveImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Ensure project.images exists before using it
  const images = project.images || project.gallery || [];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="animate-fade-in-up">
      {/* Project Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-t-2xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm mb-2">
              {project.category}
            </span>
            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-300">{project.role}</p>
          </div>
          <div className="flex gap-3">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <FaGithub className="w-5 h-5" />
                <span>Source Code</span>
              </Link>
            )}
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span>Live Project</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      {images.length > 0 && (
        <div className="relative bg-gray-100 p-4">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={images[activeImage]}
              alt={`${project.title} - Image ${activeImage + 1}`}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ animation: "imageZoomIn 0.5s ease-out" }}
            />
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <FaExpand className="w-5 h-5" />
            </button>
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <FaChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <FaChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
                    index === activeImage ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Project Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Summary */}
          {project.summary && (
            <section className="animate-fade-in-left">
              <h3 className="text-xl font-bold mb-4">Project Summary</h3>
              <p className="text-gray-600 leading-relaxed">{project.summary}</p>
            </section>
          )}

          {/* Responsibilities */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <section
              className="animate-fade-in-left"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-xl font-bold mb-4">Key Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {project.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <section
              className="animate-fade-in-left"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-xl font-bold mb-4">Key Outcomes</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {project.outcomes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Challenges & Reflections */}
          {(project.challenges?.length > 0 || project.reflections) && (
            <section
              className="animate-fade-in-left"
              style={{ animationDelay: "0.6s" }}
            >
              <h3 className="text-xl font-bold mb-4">
                Challenges & Reflections
              </h3>
              <div className="space-y-4">
                {project.challenges?.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Challenges</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {project.challenges.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.reflections && (
                  <div>
                    <h4 className="font-semibold mb-2">Reflections</h4>
                    {Array.isArray(project.reflections) ? (
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {project.reflections.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 leading-relaxed">
                        {project.reflections}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8 animate-fade-in-right">
          {/* Tools & Skills */}
          {project.tools && (
            <section>
              <h3 className="text-xl font-bold mb-4">Tools & Skills</h3>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(project.tools)
                  ? project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {tool}
                      </span>
                    ))
                  : project.tools.split("|").map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {tool.trim()}
                      </span>
                    ))}
              </div>
            </section>
          )}

          {/* Project Info */}
          <section>
            <h3 className="text-xl font-bold mb-4">Project Info</h3>
            <div className="space-y-3">
              {project.duration && (
                <div>
                  <span className="text-gray-500">Duration</span>
                  <p className="font-medium">{project.duration}</p>
                </div>
              )}
              {project.teamSize && (
                <div>
                  <span className="text-gray-500">Team Size</span>
                  <p className="font-medium">{project.teamSize}</p>
                </div>
              )}
              <div>
                <span className="text-gray-500">My Role</span>
                <p className="font-medium">{project.role}</p>
              </div>
            </div>
          </section>

          {/* Share Project */}
          <section>
            <h3 className="text-xl font-bold mb-4">Share Project</h3>
            <div className="flex gap-3">
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Share on Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  `Check out this project: ${project.title}`
                )}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                aria-label="Share on Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
