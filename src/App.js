import logo from "./logo.svg";
import "./App.css";
import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoImg from "./images/logo.png";
import qrcode from "./images/qrcode.png";
import ServicesList from "./components/ServicesList";
import QrCodeScanner from "./components/QrCodeWithUPI";
import QrCodeWithUPI from "./components/QrCodeWithUPI";
import BottomNavbar from "./components/BottomNavbar";
import Header from "./components/Header";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import AboutMe from "./components/AboutMe";
function App() {
  
  function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    section.scrollIntoView({ behavior: "smooth" });
  }

  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  //   console.log(navLinks);
  navLinks.forEach((link) => {
    console.log("step1", link);
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = link.id;
      //   console.log(sectionId);
      scrollToSection(sectionId);
    });
  });


  return (
    <>
      <Header />
      <Services/>
      
      <ServicesList />
      <QrCodeWithUPI />
      
      
      
      {/* About Me and Contact Us section */}
      <div
        id="about"
        class=" py-10 bg-gradient-to-r pt-28 from-emerald-500 via-emerald-400 to-emerald-500 text-white flex lg:flex-row sm:flex-col flex-col justify-center items-center"
      >
        <AboutMe/>
       <ContactUs/>
      </div>
      
      {/* Bottom Navbar */}
      <BottomNavbar />
    </>
  );
}

export default App;
