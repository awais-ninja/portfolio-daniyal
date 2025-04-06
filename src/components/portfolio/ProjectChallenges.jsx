import React from "react";

const ProjectChallenges = ({ portfolio }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Challenges & Solutions</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {portfolio.challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectChallenges;
