import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Quote from "./components/quotes/Quotes";
import Loader from "./components/loader/Loader";
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

    const allContentLoaded = () => {
      if (document.readyState === "complete") {
        handleLoad();
      }
    };

    document.addEventListener("readystatechange", allContentLoaded);
    
    return () => {
      document.removeEventListener("readystatechange", allContentLoaded);
    };
  }, []);

  const options = {
    patternWidth: 400,
    patternHeight: 400,
    grainOpacity: 0.35,
    grainDensity: 3,
    grainWidth: 1,
    grainHeight: 1,
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}

export default App;