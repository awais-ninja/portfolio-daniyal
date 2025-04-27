import React from "react";
import Script from "next/script";

const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Daniyal Faheem",
    jobTitle: "Fashion Buyer & Sourcing Specialist",
    url: "https://vercel.com/awais-s-projects-d2c2527e/portfolio-daniyal-7ttt",
    sameAs: [
      "https://www.linkedin.com/in/muhammaddaniyalfashion/",
      "https://www.instagram.com/daniyalfaheem/",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Fashion Industry",
    },
    description:
      "Fashion Buyer & Sourcing Specialist with expertise in trend forecasting, merchandising, and sustainable fashion.",
    email: "daniyalfaheem6666@gmail.com",
    telephone: "+447404072424",
    address: {
      "@type": "PostalAddress",
      addressCountry: "UK",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Huddersfield",
      sameAs: "https://www.hud.ac.uk/",
    },
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd;
