import React, { useState } from "react";
import { useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/navigation-bar/Navbar";
import Footer from "../../components/footer-section/Footer";
import { useNavigate } from "react-router-dom";
import AnimationBackground from "../../components/AnimationBackground/AnimationBackground";
import Discover from "../Discover/discover.jsx";

import slide_default_1 from "../../assets/home-images/slide_default_1.png";
import slide_default_2 from "../../assets/home-images/slide_default_2.png";
import slide_default_3 from "../../assets/home-images/slide_default_3.png";
import slide_default_4 from "../../assets/home-images/slide_default_4.png";
import slide_default_5 from "../../assets/home-images/slide_default_5.png";
import slide_default_6 from "../../assets/home-images/slide_default_6.png";
import slide_default_7 from "../../assets/home-images/slide_default_7.png";
import slide_default_8 from "../../assets/home-images/slide_default_8.png";
import slide_default_9 from "../../assets/home-images/slide_default_9.png";
import slide_default_10 from "../../assets/home-images/slide_default_10.png";

/* sponsors (bw & color) */
import datacampBW from "../../assets/home-images/datacamp_1.png";
import datacampColor from "../../assets/home-images/datacamp_2.png";
import githubBW from "../../assets/home-images/github_1.png";
import githubColor from "../../assets/home-images/github_2.png";
import Chatbot from '../../components/chatbot/ChatBotOverlay';


const slides = [
  slide_default_1,  
  slide_default_2,  
  slide_default_3,    
  slide_default_4,  
  slide_default_5,  
  slide_default_6,  
  slide_default_7,  
  slide_default_8,  
  slide_default_9,  
  slide_default_10,
];

export default function Slideshow() { 
  const [current, setCurrent] = useState(0);

  const [isPrevHover, setIsPrevHover] = useState(false);
  const [isNextHover, setIsNextHover] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prevState) => !prevState);
  };
  
  const [isDatacampHover, setIsDatacampHover] = useState(false);
  const [isGithubHover, setIsGithubHover] = useState(false);

  const navigate = useNavigate(); 

  const goPrev = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1)); 
  const goNext = () =>
    setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));

  useEffect(() => {
    document.title = "Home | GDGoC TUPM";
  }, []);
  

  return (
    <div>
      <Navbar />
      <section className="slideshow-wrap">
        <div className="global-anim-overlay">
          <AnimationBackground />
        </div>

        <div
          className="slideshow-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundImage: `url(${slide})` }}
            ></div>
          ))}
        </div>

        <div className="overlay">
          <h1>
            Connecting Student Developers
            <br /> with the Power of{" "}
            <span className="google">
              <span>G</span>
              <span>o</span>
              <span>o</span>
              <span>g</span>
              <span>l</span>
              <span>e</span>
            </span>{" "}
            Technologies
          </h1>

          <p>
            The official Google Developer Groups on Campus at
            <span className="tup">
              {" "}
              <br />
              Technological University of the Philippines - Manila
            </span>
          </p>

          <button
            className="btn-primary"
            onClick={() => {
              const section = document.getElementById("discover-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Discover GDGoC
          </button>
        </div>

        <div>
          <button
            className="arrow-btn prev"
            onClick={goPrev}
            aria-label="Previous slide"
          />

          <button
            className="arrow-btn next"
            onClick={goNext}
            aria-label="Next slide"
          />

          {/* dots */}
          <div className="dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
            
          </div>
        </div>
        </section>
        {/* sponsors row */}
        <div className="sponsors">
          <img
            src={isDatacampHover ? datacampColor : datacampBW}
            alt="Datacamp"
            onMouseEnter={() => setIsDatacampHover(true)}
            onMouseLeave={() => setIsDatacampHover(false)}
          />
          <img
            src={isGithubHover ? githubColor : githubBW}
            alt="GitHub"
            onMouseEnter={() => setIsGithubHover(true)}
            onMouseLeave={() => setIsGithubHover(false)}
          />
        </div>
        
        <Discover/>
        <Footer />
      
    </div>
  );
}
