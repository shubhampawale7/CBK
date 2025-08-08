import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../assets/hero-image.png"; // We can reuse the hero image for now
import { FaMapMarkerAlt } from "react-icons/fa";

const AboutPage = () => {
  const features = [
    "Minimum dilution with base metal",
    "Uniform hardness and carbide distribution",
    "Custom alloy selection for specific applications",
    "Large plate and pipe manufacturing capabilities",
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold">
          About CBK Engineers
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Pioneering wear protection technology through advanced metallurgy and
          precision manufacturing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-display font-semibold mb-4">
            Our Mission
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Our mission is to be the industry leader in wear plate manufacturing
            by providing our clients with the most durable, reliable, and
            cost-effective solutions. We leverage a specialized powder fusion
            welding process to ensure superior quality and performance in every
            plate we produce.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We are committed to continuous innovation and customer satisfaction,
            tailoring our products to meet the unique challenges of heavy
            industries like cement, steel, and power generation.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={aboutImage}
            alt="CBK Engineers Manufacturing"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900/50 p-10 rounded-lg mb-16">
        <h2 className="text-3xl font-display font-semibold text-center mb-8">
          Our Manufacturing Edge
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((feature) => (
            <div key={feature} className="p-4">
              <h3 className="text-lg font-semibold text-light-primary dark:text-dark-primary">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* --- Our Locations Section --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-display font-semibold text-center mb-8">
          Our Locations
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Office Location */}
          <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-200 dark:bg-gray-800 text-gray-500 h-64 flex items-center justify-center">
              Google Map Placeholder
            </div>
            <div className="p-4">
              <h3 className="font-semibold flex items-center gap-2">
                <FaMapMarkerAlt /> Office
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                562, Sadashiv Peth, Chitrashala Building, Flat # 218, Pune 411
                030.
              </p>
            </div>
          </div>
          {/* Plant Location */}
          <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-200 dark:bg-gray-800 text-gray-500 h-64 flex items-center justify-center">
              Google Map Placeholder
            </div>
            <div className="p-4">
              <h3 className="font-semibold flex items-center gap-2">
                <FaMapMarkerAlt /> Plant
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Jaimalhar Industrial Estate, Plot No. 13, Gat No. 1548, Sonawane
                Vasti Road, Chikhali, Pune 411062.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-display font-semibold mb-4">
          Ready to Enhance Your Operations?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Discover how our wear plates can increase the lifespan of your
          machinery.
        </p>
        <Link to="/contact">
          <button className="px-10 py-4 bg-light-primary dark:bg-dark-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 font-display">
            Contact Us Today
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
