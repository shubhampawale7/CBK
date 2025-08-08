import React from "react";
import { applicationsData } from "../data/applications.jsx";
import { FaCheckCircle } from "react-icons/fa";

const IndustrySection = ({ industry }) => {
  return (
    <section className="mb-16 bg-gray-50 dark:bg-gray-900/50 p-8 rounded-lg">
      <h2 className="text-3xl font-display font-bold mb-3">{industry.title}</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        {industry.description}
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
        {industry.applications.map((app) => (
          <div key={app} className="flex items-center gap-3">
            <FaCheckCircle className="text-light-primary dark:text-dark-primary flex-shrink-0" />
            <span>{app}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const IndustriesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold">
          Industries & Applications
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          CBK Engineers provides tailor-made wear solutions across a wide
          spectrum of heavy industries, ensuring maximum equipment life and
          performance.
        </p>
      </div>

      <IndustrySection industry={applicationsData.cement} />
      <IndustrySection industry={applicationsData.steel} />
      <IndustrySection industry={applicationsData.oreProcessing} />
      <IndustrySection industry={applicationsData.power} />
    </div>
  );
};

export default IndustriesPage;
