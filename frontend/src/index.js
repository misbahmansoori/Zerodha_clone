import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing page/home/HomePage";
import AboutPage from "./landing page/about/AboutPage";
import PricingPage from "./landing page/pricing/PricingPage";
import ProductsPage from "./landing page/products/ProductsPage";
import SupportPage from "./landing page/support/SupportPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./landing page/Navbar";
import Footer from "./landing page/Footer";
import NotFound from "./landing page/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
