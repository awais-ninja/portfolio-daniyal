"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProjectGallery = ({ portfolio }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Project Gallery</h3>
      <div className="grid grid-cols-4 gap-4">
        {portfolio.gallery.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`relative h-24 w-full overflow-hidden rounded-lg ${
              activeImage === index ? "ring-2 ring-black" : ""
            }`}
          >
            <Image
              src={image}
              alt={`${portfolio.title} - Image ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
