import React from "react";

const IndustryCard = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-md border border-transparent hover:border-light-primary/50 dark:hover:border-dark-primary/50 transition-all duration-300">
      <div className="text-light-primary dark:text-dark-primary text-4xl mb-4 inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default IndustryCard;
