import logo from "./logo.svg";
import "./App.css";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";

// Import components
import ServicesList from "./components/ServicesList";
import QrCodeWithUPI from "./components/QrCodeWithUPI";
import BottomNavbar from "./components/BottomNavbar";
import Header from "./components/Header";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import AboutMe from "./components/AboutMe";
import config from "./config.json"; // Correctly import your config

function App() {
  function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  React.useEffect(() => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const sectionId = link.getAttribute("href").substring(1); // Get the ID from the href without the #
        scrollToSection(sectionId);
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <div id="home">
        <Header
          title={config.header.title}
          logoText={config.header.logoText}
          tagline={config.header.tagline}
        />
      </div>
      <div id="services">
        <Services services={config.services} />
      </div>

      <div id="qrcode">
        <QrCodeWithUPI />
      </div>

      {/* About Me and Contact Us section */}
      <div
        id="about"
        className="py-10 bg-gradient-to-r pt-28 from-emerald-500 via-emerald-400 to-emerald-500 text-white flex lg:flex-row sm:flex-col flex-col justify-center items-center"
      >
        <AboutMe />
        <ContactUs />
      </div>

      {/* Bottom Navbar */}
      <BottomNavbar />
      <ToastContainer />
    </>
  );
}

export default App;
