import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Model from "./components/Models/Model";
import Gallery from "./components/Gallery/Gallery";
import Rrr from "./components/Rrr/Rrr";
import WasteClass from "./components/WasteClass/WasteClass";
import Dashboard from "./components/Dasboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Rrr />
      <WasteClass />
      <Gallery />
      <Model />
      <Dashboard />
    </div>
  );
}

export default App;
