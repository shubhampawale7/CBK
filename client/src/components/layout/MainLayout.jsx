import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // Import motion
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  useSmoothScroll();
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AnimatePresence mode="wait">
        {/* We apply the motion properties directly to a wrapper around the Outlet */}
        <motion.main
          key={location.pathname} // Use pathname for a unique key
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-grow"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default MainLayout;
