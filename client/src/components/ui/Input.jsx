import React from "react";

const Input = ({ type = "text", placeholder, name, required = false }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:outline-none transition-shadow"
    />
  );
};

export default Input;
