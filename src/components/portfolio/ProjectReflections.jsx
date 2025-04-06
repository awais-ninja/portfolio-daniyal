import React from "react";

const ProjectReflections = ({ portfolio }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Reflections & Learnings</h3>
      <p className="text-gray-700">{portfolio.reflections}</p>
    </div>
  );
};

export default ProjectReflections;
