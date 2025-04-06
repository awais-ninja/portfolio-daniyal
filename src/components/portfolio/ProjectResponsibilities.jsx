import React from "react";

const ProjectResponsibilities = ({ portfolio }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {portfolio.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectResponsibilities;
