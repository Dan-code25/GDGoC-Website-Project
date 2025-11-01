import React from "react";
import { useEffect } from "react";
import Navbar from "../components/navigation-bar/Navbar";
import Footer from "../components/footer-section/Footer";
import { useNavigate } from "react-router-dom";
import "./Pages.css"; 
import { assets } from "../assets/assets";

const UnderConstruction = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    document.title = "Under Construction | GDGoC TUPM";
  }, []);

  return (
     <>
     <Navbar />
    <div className="status-page">
      {/* Right Section */}
      <div className="status-right">
        <img src={assets.construction_on_site} alt="Construction on Site" />
      </div>
      {/* Left Section */}
      <div className="content-text">
        <h1>Construction on Site...</h1>
        <p>
          We are currently engaged in the construction of an extraordinary project, <br/>
          and we aske for your understanding as we navigate through the <br/>
          process. Kindly excuse and temporary disarray as we are actively <br/>
          working to bring our vision to fruition. <br/>
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

export default UnderConstruction;