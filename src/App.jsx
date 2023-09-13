import React, { useLayoutEffect, useRef } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Des from "./Components/Des";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full relative bg-white text-black font-Jost">
      <Header />
      <Hero />
      <About />
      <Des />
      <Footer />
    </div>
  );
}

export default App;
