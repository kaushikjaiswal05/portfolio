import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import './home.css';

function Home() {
  useEffect(() => {
    const initParticleNetwork = () => {
      const options = {
        particleColor: '#888',
        interactive: true,
        speed: 'medium',
        density: 'high',
        background: null, 
      };
      new window.ParticleNetwork(document.getElementById('particle-canvas'), options);
    };

    if (window.ParticleNetwork) {
      initParticleNetwork();
    } else {
      const script = document.createElement('script');
      script.src = '/particle.min.js';
      script.onload = initParticleNetwork;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="home">
      <div id="particle-canvas" className="particle-canvas"></div>
      <motion.div className="animation-container"
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1}}
      >
        <h1>Hi, I'm Kaushik Jaiswal</h1>
        <p>Full Stack Developer & Photographer</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/kaushik-jaiswal-1813a0185/"><LinkedInIcon  style={{alignSelf: "center", marginBottom: "4px", fontSize: "large"}}/></a>
          <a href="https://github.com/kaushikjaiswal05"><GitHubIcon  style={{alignSelf: "center", marginBottom: "4px", fontSize: "large"}}/></a>
          <a href="mailto:kaushikjaiswal024@gmail.com"><EmailIcon  style={{alignSelf: "center", marginBottom: "4px", fontSize: "large"}}/></a>
          <a href="https://www.instagram.com/_kaushikjaiswal_05/"><InstagramIcon  style={{alignSelf: "center", marginBottom: "4px", fontSize: "large"}}/></a>
          <a href="https://www.behance.net/kaushikjaiswal"><i className="fa-brands fa-behance"  style={{alignSelf: "center", marginBottom: "4px", fontSize: "large"}}></i></a>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
