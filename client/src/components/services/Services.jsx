import React from "react";
import "./services.css";

function Services() {
  return (
    <div className="services">
      <h1>What i do.</h1>
      <p>I build web applications and capture the world through my lenses.</p>
      <div className="cards">
        <div>
          <h2>Web development</h2>
          <p>
            I build websites that are fast, interactive, and beautiful. My stack
            includes HTML, CSS, JavaScript, React, Node, Express, MongoDB.
          </p>
        </div>
        <div>
          <h2>Photography</h2>
          <p>
            I capture moments in life with my lens. My stack includes Adobe
            Photoshop, Adobe Lightroom, and da'Vinci Resolve.
          </p>
        </div>
        <div>
          <h2>Graphic design</h2>
          <p>
            I create logos, social media graphics, and more. My stack includes
            Adobe Illustrator, Adobe Photoshop, and Adobe Indesign.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
