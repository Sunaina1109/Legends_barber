import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import "./index.css";
import App from "./App";
import Header from "./home/Header";
import Footer from "./home/Footer";
import About from "./home/About";
import Services from "./home/Services";
import GalleryImage from "./gallery/GalleryImage";
import Follow from "./home/Follow";
import Price from "./price/Price";
//import PortoSalon from "./group1/PortoSalon";
import Disclaimer from "./Webpages.jsx/Disclaimer";
import PrivacyPolicy from "./Webpages.jsx/PrivacyPolicy";
import TermsCondition from "./Webpages.jsx/TermsCondition";
import ScrollTop from "./ScrollTop";
import AppointmentForm from "./appointment/AppointmentForm";


createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <BrowserRouter>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/photos" element={<GalleryImage />} />
        <Route path="/contact-us" element={<Follow />} />
        <Route path="/price" element={<Price />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms&conditions" element={<TermsCondition />} />

      </Routes>
      <AppointmentForm />

      <Footer />
      <ScrollTop />
    </BrowserRouter>
  </ModalProvider>
);
