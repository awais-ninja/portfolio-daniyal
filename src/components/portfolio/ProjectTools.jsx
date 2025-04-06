import React from "react";

const ProjectTools = ({ portfolio }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Tools & Skills Used</h3>
      <div className="flex flex-wrap gap-2">
        {portfolio.tools.split("|").map((tool, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {tool.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectTools;
