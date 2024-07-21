import React from 'react'
import './footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2024 All rights reserved. Designed by Kaushik Jaiswal</p>
      <div className="socials">
          <a href="https://www.linkedin.com/in/kaushik-jaiswal-1813a0185/"><LinkedInIcon  style={{alignSelf: "center", marginBottom: "4px", fontSize: "large"}}/></a>
          <a href="https://github.com/kaushikjaiswal05"><GitHubIcon  style={{alignSelf: "center", marginBottom: "4px", fontSize: "large"}}/></a>
          <a href="mailto:kaushikjaiswal024@gmail.com"><EmailIcon  style={{alignSelf: "center", marginBottom: "4px", fontSize: "large"}}/></a>
          <a href="https://www.instagram.com/_kaushikjaiswal_05/"><InstagramIcon  style={{alignSelf: "center", marginBottom: "4px", fontSize: "large"}}/></a>
          <a href="https://www.behance.net/kaushikjaiswal"><i className="fa-brands fa-behance"  style={{alignSelf: "center", marginBottom: "4px", fontSize: "medium"}}></i></a>
        </div>
    </div>
  )
}

export default Footer