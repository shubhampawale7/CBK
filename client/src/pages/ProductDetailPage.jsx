import React from "react";
import { useParams, Link } from "react-router-dom";
import { productGrades } from "../data/products.jsx";
import { FaChevronLeft, FaCheck } from "react-icons/fa6";

const ProductDetailPage = () => {
  const { productName } = useParams();
  const product = productGrades.find(
    (p) => p.name.toLowerCase() === productName.replace(/-/g, " ").toLowerCase()
  );

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p className="mt-4">The product you are looking for does not exist.</p>
        <Link
          to="/products"
          className="mt-8 inline-block text-light-primary dark:text-dark-primary hover:underline"
        >
          &larr; Back to Products
        </Link>
      </div>
    );
  }

  const allElements = [
    "C",
    "Mn",
    "Cr",
    "B",
    "W",
    "Nb",
    "V",
    "Si",
    "Mo",
    "Ni",
    "Ti",
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        to="/products"
        className="inline-flex items-center gap-2 mb-8 text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary"
      >
        <FaChevronLeft />
        Back to All Products
      </Link>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Left Column: Details */}
        <div className="lg:col-span-3">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-light-primary dark:text-dark-primary">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            {product.description}
          </p>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-display font-semibold mb-4">
              Key Specifications
            </h2>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="font-semibold text-gray-600 dark:text-gray-400">
                  Hardness:
                </span>
                <span>{product.hardness}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-gray-600 dark:text-gray-400">
                  Max Temperature:
                </span>
                <span>{product.temp}</span>
              </li>
            </ul>
          </div>

          {/* Chemical Composition */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-display font-semibold mb-4">
              Chemical Composition
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {allElements.map((el) => (
                <div
                  key={el}
                  className={`flex items-center gap-2 p-2 rounded-md ${
                    product.composition[el]
                      ? "bg-green-100 dark:bg-green-900/50"
                      : "bg-gray-100 dark:bg-gray-800/50"
                  }`}
                >
                  {product.composition[el] && (
                    <FaCheck className="text-green-500" />
                  )}
                  <span
                    className={`${
                      product.composition[el] ? "font-bold" : "text-gray-400"
                    }`}
                  >
                    {el}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Microstructure */}
        <div className="lg:col-span-2">
          {product.microstructure ? (
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg h-full">
              <h2 className="text-2xl font-display font-semibold mb-4">
                Microstructure Analysis
              </h2>
              <div className="space-y-4 text-sm">
                <p>
                  <strong className="font-semibold text-gray-600 dark:text-gray-400">
                    Hardness:
                  </strong>{" "}
                  {product.microstructure.hardness}
                </p>
                <p>
                  <strong className="font-semibold text-gray-600 dark:text-gray-400">
                    Observation:
                  </strong>{" "}
                  {product.microstructure.observation}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    Carbide Distribution:
                  </h4>
                  <p className="pl-4">
                    Primary (angular/rod):{" "}
                    {product.microstructure.primaryCarbide}
                  </p>
                  <p className="pl-4">
                    Secondary (spheroidal):{" "}
                    {product.microstructure.secondaryCarbide}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg h-full flex items-center justify-center">
              <p className="text-gray-500">
                Detailed microstructure analysis not available for this grade.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
