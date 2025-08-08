import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import { FaThermometerHalf, FaHardHat } from "react-icons/fa";

const ProductCard = ({ product }) => {
  // Create a URL-friendly slug from the product name
  const productSlug = product.name.toLowerCase().replace(/ /g, "-");

  return (
    <Link to={`/products/${productSlug}`} className="block h-full">
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="border rounded-lg p-6 shadow-md bg-white dark:bg-gray-800/50 dark:border-gray-700 h-full flex flex-col"
      >
        <h3 className="text-2xl font-display font-bold text-light-primary dark:text-dark-primary mb-3">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {product.description}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between text-sm">
          <div className="flex items-center">
            <FaHardHat className="mr-2 text-light-primary dark:text-dark-primary" />
            <span>{product.hardness}</span>
          </div>
          <div className="flex items-center">
            <FaThermometerHalf className="mr-2 text-light-primary dark:text-dark-primary" />
            <span>{product.temp}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
