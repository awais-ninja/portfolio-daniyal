"use client";

import React from "react";
import PortfolioDetails from "../../components/PortfolioDetails";
import portfolioData from "../../data/portfolio";

export default function SS24Project() {
  // Find the SS24 project (id: 1) from the portfolio data
  const ss24Project = portfolioData.find((item) => item.id === 1);

  if (!ss24Project) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600">
            The SS24 project data could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32">
      <PortfolioDetails portfolio={ss24Project} />
    </div>
  );
}
