import React from "react";
import About from "./sections/About ";
import Activity from "./sections/Activity";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Ido from "./sections/Ido";
import Nav from "./sections/Nav";
import Summary from "./sections/Summary";
import "animate.css";


const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      {/* other sections */}
      <About />
      <Summary />
      <Ido />
      <Activity />
      <Footer />
    </>
  );
};

export default App;
