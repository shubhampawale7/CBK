import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (This is a placeholder)");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold">
          Get In Touch
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have a question or a project in mind? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-display font-semibold mb-4">
            Contact Details
          </h2>
          <div className="flex items-start">
            <FaMapMarkerAlt
              className="text-light-primary dark:text-dark-primary mt-1 mr-4 flex-shrink-0"
              size={20}
            />
            <div>
              <h3 className="font-semibold">Office Address</h3>
              <p className="text-gray-600 dark:text-gray-400">
                562, Sadashiv Peth, Chitrashala Building, Flat # 218, Pune 411
                030. Maharashtra, INDIA.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaMapMarkerAlt
              className="text-light-primary dark:text-dark-primary mt-1 mr-4 flex-shrink-0"
              size={20}
            />
            <div>
              <h3 className="font-semibold">Plant Address</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Jaimalhar Industrial Estate, Plot No. 13, Gat No. 1548, Sonawane
                Vasti Road, Chikhali, Pune 411062. Maharashtra, INDIA.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FaPhone
              className="text-light-primary dark:text-dark-primary mr-4"
              size={20}
            />
            <p>9028040306</p>
          </div>
          <div className="flex items-center">
            <FaWhatsapp
              className="text-light-primary dark:text-dark-primary mr-4"
              size={20}
            />
            <p>8530302402</p>
          </div>
          <div className="flex items-start">
            <FaEnvelope
              className="text-light-primary dark:text-dark-primary mt-1 mr-4 flex-shrink-0"
              size={20}
            />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">
                chinmay562@yahoo.com
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                cbk_engineers@yahoo.com
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-4 p-8 bg-white dark:bg-gray-800/50 rounded-lg shadow-lg"
          >
            <Input name="name" placeholder="Your Name" required />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />
            <Input name="subject" placeholder="Subject" required />
            <Textarea name="message" placeholder="Your Message" required />
            <button
              type="submit"
              className="w-full mt-4 px-8 py-3 bg-light-primary dark:bg-dark-primary text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* --- Map Section --- */}
      <section>
        <h2 className="text-3xl font-display font-semibold text-center mb-8">
          Find Us
        </h2>
        <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-200 dark:bg-gray-800 text-gray-500 h-96 flex items-center justify-center">
            Google Map Placeholder (Showing Office & Plant)
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
