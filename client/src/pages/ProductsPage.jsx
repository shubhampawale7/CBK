import React from "react";
import { productGrades } from "../data/products.jsx";
import ProductCard from "../components/ui/ProductCard.jsx";

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold">
          Our Wear Plate Grades
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We offer a wide range of wear plates, each engineered with a specific
          alloy composition to meet diverse industrial challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productGrades.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
