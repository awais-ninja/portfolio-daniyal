import React from "react";
import Link from "./Link";
import { FaDownload } from "react-icons/fa6";

const CV = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/cv/Muhammad_Daniyal_CV.pdf";
    link.download = "Muhammad_Daniyal_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white p-8 max-w-4xl mx-auto shadow-lg rounded-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">MUHAMMAD DANIYAL</h1>
        <h2 className="text-xl text-gray-700 mb-4">Fashion Merchandiser</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <p>📍 41 Charles Street, Leicester, England (Willing to Relocate)</p>
          <Link
            href="mailto:daniyalfaheem6666@gmail.com"
            className="hover:underline"
          >
            📧 daniyalfaheem6666@gmail.com
          </Link>
          <Link href="tel:+447404072424" className="hover:underline">
            📱 +44 7404 072424
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammaddaniyalfashion/"
            className="hover:underline"
          >
            🔗 LinkedIn
          </Link>
          <Link href="#portfolio" className="hover:underline">
            📁 Portfolio
          </Link>
        </div>

        {/* Download CV Button */}
        <div className="mt-6">
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <FaDownload className="mr-2" />
            Download CV
          </button>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 border-b pb-1">
          Professional Summary
        </h3>
        <p className="text-gray-700">
          Fashion Merchandiser with experience across retail operations,
          sourcing, and production for international and local brands. Strong
          understanding of product development, range planning, and buyer-vendor
          communication. Skilled in coordinating samples, lab dips, and
          packaging while ensuring quality and efficiency. Currently completing
          BSc (Hons) Fashion Management in the UK with a proven track record of
          success in merchandising roles in both supplier and brand
          environments.
        </p>
      </div>

      {/* Key Skills */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 border-b pb-1">Key Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div className="bg-gray-50 p-2 rounded">Product Development</div>
          <div className="bg-gray-50 p-2 rounded">Fashion Merchandising</div>
          <div className="bg-gray-50 p-2 rounded">
            Garment Costing & Sourcing
          </div>
          <div className="bg-gray-50 p-2 rounded">Trend Forecasting</div>
          <div className="bg-gray-50 p-2 rounded">Range Planning</div>
          <div className="bg-gray-50 p-2 rounded">
            Buyer-Vendor Communication
          </div>
          <div className="bg-gray-50 p-2 rounded">
            Inventory & Stock Control
          </div>
          <div className="bg-gray-50 p-2 rounded">Sample Coordination</div>
          <div className="bg-gray-50 p-2 rounded">Visual Merchandising</div>
          <div className="bg-gray-50 p-2 rounded">Quality Control</div>
          <div className="bg-gray-50 p-2 rounded">Retail Customer Service</div>
          <div className="bg-gray-50 p-2 rounded">
            Digital & Email Marketing
          </div>
          <div className="bg-gray-50 p-2 rounded">
            MS Office (Word, Excel, PPT)
          </div>
          <div className="bg-gray-50 p-2 rounded">
            Wilcom Embroidery Software
          </div>
          <div className="bg-gray-50 p-2 rounded">Team Collaboration</div>
          <div className="bg-gray-50 p-2 rounded">Time Management</div>
          <div className="bg-gray-50 p-2 rounded">CRM & B2B Sales</div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 border-b pb-1">
          Work Experience
        </h3>

        <div className="mb-4">
          <h4 className="font-bold">Retail Sales Assistant</h4>
          <p className="italic text-gray-600">
            Trespass, Leicester – Sept 2024 – Present
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>
              Supported store team with sales performance and customer service.
            </li>
            <li>
              Maintained visual merchandising standards and assisted with stock
              placement.
            </li>
            <li>
              Communicated customer preferences to improve product presentation
              and store layout.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">Merchandising Admin Assistant</h4>
          <p className="italic text-gray-600">
            IM Knitwear, Leicester – Aug 2024 – Sept 2024
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>
              Prepared and ordered packaging materials (hangtags, care labels)
              for Boohoo PLC's Dorothy Perkins.
            </li>
            <li>
              Ensured accurate labeling and tracking of finished goods for
              dispatch.
            </li>
            <li>Maintained inventory of packaging components.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">Assistant Merchandiser</h4>
          <p className="italic text-gray-600">
            Indus Apparel Pvt Ltd, Karachi – Apr 2024 – May 2024
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>
              Supported end-to-end merchandising for Italian clients Richfield
              and Jacob Smiths'.
            </li>
            <li>
              Liaised between local factories and overseas buyers for timely
              production.
            </li>
            <li>
              Finalized lab dips, trim cards, and coordinated dispatch of
              development samples.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">Fashion Merchandising Assistant</h4>
          <p className="italic text-gray-600">
            Faheem Traders, Karachi – Oct 2019 – Oct 2021
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>
              Conducted seasonal range planning and trend analysis for garment
              collections.
            </li>
            <li>
              Evaluated suppliers based on quality, pricing, and turnaround
              time.
            </li>
            <li>
              Maintained inventory tracking and managed inflow of purchased
              stock.
            </li>
            <li>
              Worked with visual merchandising team to align product
              presentation with buying strategy.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">Factory Internship – Embroidery</h4>
          <p className="italic text-gray-600">
            Farrukh's Embroidery, Karachi – Nov 2021 – Feb 2022
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>
              Trained on Wilcom embroidery software for stitching methods and
              thread handling.
            </li>
            <li>Supported material sourcing for embroidery production.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">Internee Merchandiser</h4>
          <p className="italic text-gray-600">
            Pakiza Knitting, Karachi – Feb 2022 – Mar 2022
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>
              Learned GSM checks, waste management, and yarn sourcing standards
              (ISO/OEKO-TEX).
            </li>
            <li>
              Handled consumption calculations and fabric quality consistency.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">Safety Operative</h4>
          <p className="italic text-gray-600">
            The North Face, Leicester – Mar 2025 – Present
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>
              Ensured retail floor safety and observed customer behaviors to
              assist with layout improvements.
            </li>
            <li>Supported team during high-traffic hours.</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 border-b pb-1">Education</h3>

        <div className="mb-4">
          <h4 className="font-bold">
            De Montfort University, Leicester, England
          </h4>
          <p className="italic text-gray-600">
            BSc (Hons) Fashion Management | Sept 2024 – May 2025
          </p>
          <p className="text-gray-700">
            Modules: Fashion Buying, Merchandising, Marketing, Innovation & R&D
          </p>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">
            Asian Institute of Fashion Design, Karachi
          </h4>
          <p className="italic text-gray-600">
            Diploma in Fashion Marketing & Merchandising | Mar 2022 – Mar 2024
          </p>
          <p className="text-gray-700">CGPA: 3.16</p>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 border-b pb-1">
          Certifications
        </h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>
            Merchandising Course – Sindh Textile Technical Board (Costing,
            documentation, IncoTerms, PO management)
          </li>
          <li>IELTS (IDP Certified) – Band 7</li>
          <li>
            Embroidery Training – Wilcom Software, supervised by Sir Rafat Kamal
          </li>
        </ul>
      </div>

      {/* Interests */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 border-b pb-1">Interests</h3>
        <p className="text-gray-700">
          Fashion Trends, Chess, Gym, Travel, Crypto Trading, Retail Analytics
        </p>
      </div>

      {/* References */}
      <div>
        <h3 className="text-xl font-semibold mb-3 border-b pb-1">References</h3>
        <p className="text-gray-700">Available upon request.</p>
      </div>
    </div>
  );
};

export default CV;
