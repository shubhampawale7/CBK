import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { industriesData } from "../data/industries.jsx";
import IndustryCard from "../components/ui/IndustryCard.jsx";
import heroImage from "../assets/hero-image.png"; // Import the image

const HomePage = () => {
  return (
    <>
      {/* --- Hero Section --- */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-light-text dark:text-dark-text font-display">
              Engineered for{" "}
              <span className="text-light-primary dark:text-dark-primary">
                Extreme Durability
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              CBK Engineers is a leading manufacturer of high-performance wear
              plates, providing robust solutions for heavy industries worldwide.
            </p>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-light-primary dark:bg-dark-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 font-display"
              >
                Explore Our Products
              </motion.button>
            </Link>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <img
              src={heroImage}
              alt="Dozer with CBK Engineers Wear Plate"
              className="rounded-lg shadow-xl  h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* --- Industries We Serve Section --- */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold">
              Industries We Serve
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our wear plates provide critical protection in the world's most
              demanding industrial environments.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industriesData.map((industry) => (
              <IndustryCard
                key={industry.title}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
