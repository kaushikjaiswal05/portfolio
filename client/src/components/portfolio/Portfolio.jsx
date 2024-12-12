import React, { useState, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import "./portfolio.css";
import RefreshIcon from "@mui/icons-material/Refresh";

const portfolioItems = [
  {
    id: 0,
    title: "Tripod Technologies",
    image:
      "https://cdn.pixabay.com/photo/2021/07/05/12/55/computer-6389104_1280.jpg",
    description:
      "A modern and innovative platform showcasing cutting-edge solutions in technology and development. Built with React, Node.js, Express, and styled using Tailwind CSS, the website reflects a clean, user-friendly design paired with responsive functionality. This project demonstrates my expertise in full-stack development, creating scalable and impactful web experiences.",
    url: "https://tripodtechnologies.com/",
  },
  {
    id: 1,
    title: "Real Estate Agency",
    image: "images/realestate.jpg",
    description:
      "Find your dream home easily with our real estate website. Built with React, Bootstrap, and React Leaflet, it offers interactive maps and detailed property listings for a smooth browsing experience. Start your home search today!",
    url: "https://github.com/kaushikjaiswal05/Real-Estate",
  },
  {
    id: 2,
    title: "x-app clone",
    image: "images/xapp.jpg",
    description:
      "Experience Twitter in a new way with my Twitter app clone. Built with React and Twitter Tweet Embed, it lets you browse and interact with tweets seamlessly. Enjoy a familiar interface with enhanced performance. Dive into the Twitterverse now!",
    url: "https://github.com/kaushikjaiswal05/x-clone",
  },
  {
    id: 3,
    title: "TinDog App",
    image: "images/dog.jpg",
    description:
      "Welcome to TinDog, the perfect matchmaking site for dogs! Built using Bootstrap, this responsive website connects dog owners and their pets with potential playmates in the area. Explore profiles, view adorable photos, and arrange meetups with ease. Find your dog's new best friend today!",
    url: "https://kaushikjaiswal05.github.io/TinDog-Project-Website/",
  },
  {
    id: 4,
    title: "Into the Wild",
    image: "images/wildlife.jpeg",
    description:
      "Explore stunning wildlife photography and post processing. Dive into a visual journey through nature's beauty, captured and enhanced with precision. Follow for breathtaking shots and professional edits that bring the wild to life.",
    url: "https://www.behance.net/kaushikjaiswal",
  },
  {
    id: 5,
    title: "Keeper App",
    image: "images/keeperApp.jpg",
    description:
      "Stay organized with our Google Keep clone. Built with React and Material UI, this app lets you easily create, manage, and store notes. Enjoy a clean, intuitive interface for all your note-taking needs. Keep your ideas at your fingertips!",
    url: "https://github.com/kaushikjaiswal05/KeeperApp",
  },
  {
    id: 6,
    title: "logistics",
    image: "images/logistics.jpg",
    description:
      "Discover seamless logistics solutions with our fully responsive website. Built using plain HTML and CSS, it offers a user-friendly experience across all devices. Explore our services, track shipments, and manage logistics efficiently. Your reliable partner in transportation and logistics.",
    url: "https://kaushikjaiswal05.github.io/Logistics/",
  },
  {
    id: 7,
    title: "Refer and Earn",
    image: "images/refer.png",
    description:
      "This project consists of a Refer & Earn landing page built using the MERN stack. The frontend is developed using React.js, and the backend is powered by Express.js, connecting to a MySQL database via Prisma ORM.",
    url: "https://github.com/kaushikjaiswal05/Refer-and-Earn",
  },
  {
    id: 8,
    title: "Green Garden Vermicompost",
    image: "images/greengarden.jpg",
    description:
      "GreenGarden is a responsive and interactive website designed for a client in the agricultural sector. The project focuses on promoting sustainable farming practices, including vermicomposting and crop health management. Built using Bootstrap, HTML, CSS, and JavaScript, GreenGarden delivers a visually appealing and easy-to-navigate platform tailored for agricultural businesses.",
    url: "https://github.com/kaushikjaiswal05/greengarden",
  },
];

const Portfolio = () => {
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedProject]);

  const handleItemClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="portfolio">
      <div className="text">
        <h2>Recent works.</h2>
        <p>
          Check out some of my recent web development and photography projects.
        </p>
      </div>
      <div className="portfolio-items">
        {portfolioItems.slice(0, displayCount).map((item) => (
          <div
            key={item.id}
            className="portfolio-item"
            onClick={() => handleItemClick(item)}
            ref={(el) => el && VanillaTilt.init(el, { max: 10, speed: 400 })}
          >
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
      {displayCount < portfolioItems.length && (
        <button className="load" onClick={handleLoadMore}>
          <RefreshIcon style={{ fontSize: "0.8rem", fontWeight: "bolder" }} />
          <span>Load More</span>
        </button>
      )}

      {selectedProject && (
        <div className={`modal ${selectedProject ? "show" : ""}`}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <button
              className="visit"
              onClick={() => window.open(selectedProject.url, "_blank")}
            >
              View Project
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
