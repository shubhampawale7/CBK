import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { FaSun, FaMoon } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return `block py-2 px-3 rounded md:p-0 transition-colors duration-300 ${
      isActive
        ? "text-white bg-light-primary md:bg-transparent md:text-light-primary dark:md:text-dark-primary"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-light-primary dark:md:hover:text-dark-primary"
    }`;
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  return (
    <header className="bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <NavLink
          to="/"
          className="text-2xl font-display font-bold text-light-text dark:text-dark-text"
        >
          CBK {""}
          <span className="text-light-primary dark:text-dark-primary">
            Engineers
          </span>
        </NavLink>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex items-center p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 font-medium text-lg">
            <li>
              <NavLink to="/" className={navLinkStyles}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkStyles}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={navLinkStyles}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/industries" className={navLinkStyles}>
                Industries
              </NavLink>
            </li>
            <li>
              <NavLink to="/fabrication" className={navLinkStyles}>
                Fabrication
              </NavLink>
            </li>
            <li>
              <NavLink to="/microstructure" className={navLinkStyles}>
                Microstructure
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkStyles}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-light-primary dark:text-dark-primary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 p-2"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full bg-light-background dark:bg-dark-background shadow-lg"
          >
            <ul className="flex flex-col items-center space-y-2 p-4">
              <li>
                <NavLink
                  to="/"
                  className={navLinkStyles}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={navLinkStyles}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={navLinkStyles}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/industries"
                  className={navLinkStyles}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Industries
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fabrication"
                  className={navLinkStyles}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fabrication
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/microstructure"
                  className={navLinkStyles}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Microstructure
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={navLinkStyles}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
