import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Model from "./components/Models/Model";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Model />
      <Gallery />
    </div>
  );
}

export default App;
