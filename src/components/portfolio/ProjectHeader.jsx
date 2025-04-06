"use client";

import React from "react";
import Image from "next/image";

const ProjectHeader = ({ portfolio }) => {
  return (
    <div className="mb-8">
      <div className="relative h-96 w-full mb-6">
        <Image
          src={portfolio.image}
          alt={portfolio.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-3xl font-bold mb-2">{portfolio.title}</h2>
      <p className="text-xl text-gray-600 mb-1">{portfolio.role}</p>
      <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
        {portfolio.category}
      </span>
    </div>
  );
};

export default ProjectHeader;
