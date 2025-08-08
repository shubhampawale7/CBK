import React from "react";
import { FaCheckCircle } from "react-icons/fa";
// CORRECTED: Replaced non-existent icons with valid ones from the 'pi' library
import {
  PiToolboxDuotone,
  PiCircleNotchDuotone,
  PiRulerDuotone,
} from "react-icons/pi";

const FabricationPage = () => {
  const features = [
    "Minimum dilution with base metal",
    "Minimum penetration with base metal (0.5 mm to 1mm)",
    "Uniform distribution of carbides throughout the thickness",
    "Uniform hardness throughout the thickness",
    "Selection of different alloys to suit your application",
    "Uniform thickness of weld deposit",
  ];

  const fixingMethods = [
    { name: "Welding to base metal", icon: <PiToolboxDuotone /> },
    { name: "CSK holes by spark erosion", icon: <PiCircleNotchDuotone /> },
    { name: "Welding on of studs", icon: <PiToolboxDuotone /> },
    { name: "Welding through holes", icon: <PiCircleNotchDuotone /> },
  ];

  const sizeSpecs = [
    { name: "Plate Size", values: ["1350 mm x 3000 mm", "1150 mm x 2400 mm"] },
    { name: "Deposit Thickness", values: ["3mm", "4mm", "5mm", "6mm", "8mm"] },
    {
      name: "Base Plate Thickness",
      values: ["5mm", "6mm", "8mm", "10mm", "12mm"],
    },
    { name: "Pipe Diameter (Min)", values: ["min. 300 mm with 8+4 Size"] },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold">
          Fabrication & Features
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Our advanced powder fusion welding process and flexible fabrication
          options ensure a perfect fit for your specific application.
        </p>
      </div>

      {/* Technical Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-display font-semibold text-center mb-8">
          Technical Process Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
            >
              <FaCheckCircle className="text-light-primary dark:text-dark-primary flex-shrink-0 mt-1" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Fixing Methods Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-display font-semibold text-center mb-8">
          Fixing Methods
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {fixingMethods.map((method, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-md"
            >
              <div className="text-5xl text-light-primary dark:text-dark-primary mb-4 inline-block">
                {method.icon}
              </div>
              <h3 className="font-semibold">{method.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Size & Dimensions Section */}
      <section>
        <h2 className="text-3xl font-display font-semibold text-center mb-8">
          Sizes & Dimensions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sizeSpecs.map((spec, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-md"
            >
              <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                <PiRulerDuotone className="text-light-primary dark:text-dark-primary" />
                {spec.name}
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {spec.values.map((val) => (
                  <li key={val}>{val}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FabricationPage;
