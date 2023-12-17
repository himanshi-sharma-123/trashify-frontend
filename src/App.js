import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Model from "./components/Models/Model";
import Gallery from "./components/Gallery/Gallery";
import AboutText from "./components/AboutText/AboutText";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <AboutText />
      <Model />
      <Gallery />
    </div>
  );
}

export default App;
