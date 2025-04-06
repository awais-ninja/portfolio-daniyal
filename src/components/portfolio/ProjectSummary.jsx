import React from "react";

const ProjectSummary = ({ portfolio }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Project Summary</h3>
      <p className="text-gray-700">{portfolio.summary}</p>
    </div>
  );
};

export default ProjectSummary;
