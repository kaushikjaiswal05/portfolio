import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Quote from "./components/quotes/Quotes";
import Grained from "./components/grainyBackground/Grained";
import Techstack from "./components/techstack/Techstack";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const options = {
    patternWidth: 400,
    patternHeight: 400,
    grainOpacity: 0.35,
    grainDensity: 3,
    grainWidth: 1,
    grainHeight: 1,
  };

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="app">
      <Grained options={options} />
      <Home />
      <About />
      <Techstack />
      <Services />
      <Portfolio />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
