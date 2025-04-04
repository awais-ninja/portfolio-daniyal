// This is a simple script to generate placeholder images
// You can run this with Node.js to create placeholder images for your portfolio

const fs = require("fs");
const path = require("path");

// Create SVG placeholder images
function createPlaceholderSVG(width, height, text, filename) {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>`;

  fs.writeFileSync(path.join(__dirname, filename), svg);
  console.log(`Created ${filename}`);
}

// Create portfolio placeholders
createPlaceholderSVG(800, 600, "Portfolio 1", "portfolio-1.svg");
createPlaceholderSVG(800, 600, "Portfolio 2", "portfolio-2.svg");
createPlaceholderSVG(800, 600, "Portfolio 3", "portfolio-3.svg");
createPlaceholderSVG(800, 600, "Portfolio 4", "portfolio-4.svg");

// Create testimonial placeholders
createPlaceholderSVG(200, 200, "T1", "testimonial-1.svg");
createPlaceholderSVG(200, 200, "T2", "testimonial-2.svg");
createPlaceholderSVG(200, 200, "T3", "testimonial-3.svg");

// Create profile placeholder
createPlaceholderSVG(500, 500, "Profile", "profile.svg");

console.log("All placeholder images created successfully!");
