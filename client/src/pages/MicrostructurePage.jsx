import React from "react";
import { productGrades } from "../data/products.jsx";

const MicrostructurePage = () => {
  // Filter for products that have microstructure data
  const productsWithMicrostructure = productGrades.filter(
    (p) => p.microstructure && p.microstructure.image
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold">
          Microstructure Analysis
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A closer look at the metallurgical properties that give our wear
          plates their exceptional durability.
        </p>
      </div>

      <div className="space-y-12">
        {productsWithMicrostructure.map((product) => (
          <section
            key={product.name}
            className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 dark:bg-gray-900/50 p-8 rounded-lg"
          >
            {/* Image */}
            <div>
              <img
                src={product.microstructure.image}
                alt={`${product.name} Microstructure`}
                className="rounded-lg shadow-lg w-full h-80 object-fill"
              />
            </div>
            {/* Details */}
            <div>
              <h2 className="text-3xl font-display font-semibold text-light-primary dark:text-dark-primary mb-4">
                {product.name}
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <strong className="font-semibold">Hardness:</strong>{" "}
                  {product.microstructure.hardness}
                </p>
                <p>
                  <strong className="font-semibold">Observation:</strong>{" "}
                  {product.microstructure.observation}
                </p>
                <div>
                  <h4 className="font-semibold mb-1">Carbide Distribution:</h4>
                  <ul className="list-disc list-inside pl-2">
                    <li>
                      Primary (angular/rod):{" "}
                      {product.microstructure.primaryCarbide}
                    </li>
                    <li>
                      Secondary (spheroidal):{" "}
                      {product.microstructure.secondaryCarbide}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MicrostructurePage;
