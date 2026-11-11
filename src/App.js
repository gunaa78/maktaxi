import React from "react";
import Preloader from "./Components/Preloader";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import CabTypes from "./Components/CabTypes";
import TripTypes from "./Components/TripTypes";
import PopularRoutes from "./Components/PopularRoutes";
import AppDownloadPoster from "./Components/AppDownloadPoster";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      {/* LUXURY PRELOADER WITH BGHOME CAR ANIMATION */}
      <Preloader />

      <Navbar />
      <Home />
      <About />
      <CabTypes />
      <TripTypes />
      <PopularRoutes />
      <AppDownloadPoster />
      <Footer />
    </>
  );
}
