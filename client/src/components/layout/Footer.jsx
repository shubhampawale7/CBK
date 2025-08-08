import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 shadow-inner pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-display font-bold mb-4 text-light-text dark:text-dark-text">
              CBK
              <span className="text-light-primary dark:text-dark-primary">
                Engineers
              </span>
            </h3>
            <p className="text-sm">
              Manufacturing high-performance, custom-engineered wear plates for
              heavy industrial applications worldwide.
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="text-sm space-y-3">
              <li>
                <Link
                  to="/about"
                  className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/fabrication"
                  className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                >
                  Fabrication
                </Link>
              </li>
              <li>
                <Link
                  to="/microstructure"
                  className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                >
                  Microstructure
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="text-sm space-y-4">
              <li className="flex items-center gap-3">
                <FaPhone className="text-light-primary dark:text-dark-primary flex-shrink-0" />
                <span>9028040306</span>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-light-primary dark:text-dark-primary flex-shrink-0" />
                <span>8530302402</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-light-primary dark:text-dark-primary flex-shrink-0" />
                <span>cbk_engineers@yahoo.com</span>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="font-display font-semibold text-lg mb-4">
              Office Address
            </h4>
            <div className="flex items-start gap-3 text-sm">
              <FaMapMarkerAlt className="text-light-primary dark:text-dark-primary flex-shrink-0 mt-1" />
              <p>
                562, Sadashiv Peth, Chitrashala Building, Flat # 218, Pune 411
                030. Maharashtra, INDIA.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} CBK Engineers. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
