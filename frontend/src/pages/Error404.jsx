import React from "react";
import { useEffect } from "react";
import Navbar from "../components/navigation-bar/Navbar";
import Footer from "../components/footer-section/Footer";
import { useNavigate } from "react-router-dom";
import "./Pages.css"; 
import { assets } from "../assets/assets.js"; 

const Error404 = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    document.title = "Error404 | GDGoC TUPM";
  }, []);

  return (
    <>
    <Navbar />
    <div className="status-page">
      {/* Right Section */}
      <div className="status-right">
        <img src={assets.error404} alt="404 Error" />
      </div>
      {/* Left Section */}
      <div className="content-text">
        <h1>Oops! Page not found</h1>
        <p>
          It appears that you have deviated from the established route. <br />
          Our servers are currently undergoing analysis to ascertain the root cause <br/>
          of the issue. In the interim, we recommend taking a moment to reset by <br/>
          navigating to our homepage and commencing anew.
        </p><br/>
        <button 
            className="btn-primary" 
            onClick={() => navigate("/")}>
           Return to Homepage
         </button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Error404;