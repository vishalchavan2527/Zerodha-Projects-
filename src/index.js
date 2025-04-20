import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";


import HomePage from "./landing_page/home/HomePage";
import Singup from "./landing_page/singup/Singup";
import About from "./landing_page/about/AboutPage";
import Products from "./landing_page/products/ProductsPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";


import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from "./landing_page/NotFound";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);
