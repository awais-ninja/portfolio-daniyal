import React from "react";

const ProjectOutcomes = ({ portfolio }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Outcomes & Deliverables</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {portfolio.outcomes.map((outcome, index) => (
          <li key={index}>{outcome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectOutcomes;
