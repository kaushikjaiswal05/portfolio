import React, { useEffect, useRef } from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import VanillaTilt from "vanilla-tilt";
import "./about.css";

function About() {
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current) {
      VanillaTilt.init(imgRef.current, {
        max: 10,
        speed: 400,
      });
    }
  }, []);
  const download = () => {
    const link = document.createElement("a");
    link.href = "/Kaushik-Jaiswal-Resume.pdf";
    link.download = "Kaushik-Jaiswal-Resume.pdf";
    link.click();
  };

  return (
    <>
      <div className="about">
        <img ref={imgRef} src="images/myimg.jpeg" alt="" />
        <div className="info">
          <h1>Let me introduce myself</h1>
          <p>
            Welcome to my portfolio! I am a Full Stack Developer and passionate
            photographer, combining technology and creativity. I graduated in
            2022 from Shree Ramdeobaba College of Engineering and Management,
            Nagpur with a strong skill set in HTML, CSS, JavaScript, React,
            Node, Express, MongoDB, and MySQL. My passion for coding drives me
            to continually explore new technologies and innovate in web
            development.
          </p>
          <p>
            Beyond coding, wildlife photography provides me tranquility and
            inspiration. With expertise in Adobe Photoshop and Lightroom, I
            create visually captivating images that tell compelling stories.
            Explore my portfolio to see the blend of technical expertise and
            creative vision in my projects and photographs.
          </p>
          <div className="buttons">
            <button onClick={download} className="btn">
              <CloudDownloadIcon
                className="icon"
                style={{ fontSize: "0.9rem" }}
              />
              <span>Download Resume</span>
            </button>
            <button
              href="#contact"
              className="btn"
              style={{
                backgroundColor: "white",
                color: "#3a3a3a",
                fontSize: "0.6rem",
                fontWeight: "700",
                letterSpacing: "1.5px",
              }}
              onClick={() => {
                window.location.href = "mailto:kaushikjaiswal024@gmail.com";
              }}
            >
              HIRE ME
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
