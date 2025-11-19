import React from "react";
import { useEffect } from "react";
import Navbar from "../components/navigation-bar/Navbar";
import Footer from "../components/footer-section/Footer";
import "./Pages.css"; 
import { assets } from "../assets/assets.js"; 

const MembershipClosed = () => {

  useEffect(() => {
    document.title = "Membership Closed | GDGoC TUPM";
  }, []);

  return (
    <>
    <Navbar />
      <div className="status-page membership-page">
        
        {/* Image Section */}
        <div className="status-top">
          <img
            src={assets.membership_drive}
            alt="Membership Closed"
            className="status-img"
          />
        </div>

        {/* Text Section */}
        <div className="membership">
          <h1 className="membershipTitle">
            MEMBERSHIP DRIVE IS NOW CLOSED! <br />
            STAY TUNED FOR MORE UPDATES.
          </h1>
          <p>
            Our membership drive may have ended, but our community is always open <br/>
            and buzzing with excitement. Keep an eye out for all the fun events <br/>
            and opportunities coming your way! <br/><br/>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MembershipClosed;