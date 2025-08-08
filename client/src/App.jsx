// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./components/layout/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import IndustriesPage from "./pages/IndustriesPage";
import FabricationPage from "./pages/FabricationPage";
import MicrostructurePage from "./pages/MicrostructurePage";

function App() {
  return (
    <Routes>
      {/* All public routes are nested inside MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productName" element={<ProductDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="microstructure" element={<MicrostructurePage />} />
        <Route path="fabrication" element={<FabricationPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* We can add a 404 Not Found page here later */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>

      {/* Admin routes can have a different layout in the future */}
      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
      </Route>
      */}
    </Routes>
  );
}

export default App;
