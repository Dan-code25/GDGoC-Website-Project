import React, { useEffect } from "react";
// react components
import Navbar from "../../components/navigation-bar/Navbar";
import HeroText from "../../components/hero-text/Herotext";
import ProjectCard from "../../components/project-card/ProjectCard";
import Footer from "../../components/footer-section/Footer";
// css modules and images
import styles from "../project-page/Project.module.css";
import heroStyles from "../../components/hero-text/Herotext.module.css";
import websiteProjectImg from "../../assets/images/project-images/gdgoc-website.svg";
import stayTunedMobile from "../../assets/images/project-images/stay-tuned-mobile.svg";
import stayTunedTablet from "../../assets/images/project-images/stay-tuned-tablet.svg";
import screws from "../../assets/images/project-images/screws-design.svg";



function Project(){
  useEffect(() => {
    document.title = "Project | GDGoC TUPM";
  }, []);

  return(
    <div className="d-flex flex-column align-items-center justify-content-center">

      <Navbar />
      
      <HeroText 
        header = "Explore our Project"
        subtext = {
          <>
            Explore tech excellence with GDSC TUP Manila! Join us for <span className={heroStyles.highlight1}>innovative projects</span>, <span className={heroStyles.highlight2}>tech excellence</span>, <span className={heroStyles.highlight3}>vibrant events</span>, and a <span className={heroStyles.highlight4}>dynamic community</span>. Elevate your skills and be part of shaping the future together!
          </>
        }
      />
  
      <ProjectCard 
        image = {websiteProjectImg}
        title = "GDGoC TUPM - Official Website"
        description = "Welcome to the Google Developer Student Club - TUP Manila website. Immerse yourself in a community of dedicated members, uncover a diverse array of services, and actively engage in the development of unforgettable projects!"
      />
      <div className={`${styles.container1} d-md-none d-flex`}>
        <img src={stayTunedMobile} alt="stay-tuned" />
      </div>
      <div className={`${styles.container1} d-none d-md-flex d-xl-none`}>
        <img src={stayTunedTablet} alt="stay-tuned" />
      </div>

      <div className={`${styles.stayTunedContainer} d-none d-xl-flex flex-column align-items-center justify-content-center`}> 
        <h1 className={styles.stayTuned}>Stay Tuned for more upcoming Projects!</h1>
        <div className={`${styles.container2} d-none d-xl-flex flex-column align-items-center justify-content-center`}>
          <div className={styles.screwContainer}>
            <img src={screws} alt="screws" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Project