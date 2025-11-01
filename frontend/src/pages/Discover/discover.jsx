

import React from "react";
import "./discover.css";
import Navbar from "../../components/navigation-bar/Navbar.jsx";
import Footer from "../../components/footer-section/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

/* images */
import whoWeAre from "../../assets/home-images/who_we_are.png";
import whatWeDo from "../../assets/home-images/what_we_do.png";
import whatYoullGet from "../../assets/home-images/what_youll_get.png";
import faqs from "../../assets/home-images/faqs.png";

/* wave assets*/
import asset_1 from "../../assets/home-images/asset_1.png";
import asset_2_5 from "../../assets/home-images/asset_2_5.png";
import asset_3_6 from "../../assets/home-images/asset_3_6.png";
import asset_4_7 from "../../assets/home-images/asset_4_7.png";

export default function Discover() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Discover | GDGoC TUPM";
  }, []);


  return (
    <section className="content">
      <Navbar />

      <div className="waves">
        <img src={asset_1} alt="wave 1" />
        <img src={asset_2_5} alt="wave 2" />
        <img src={asset_3_6} alt="wave 3" />
        <img src={asset_4_7} alt="wave 4" />
        <img src={asset_2_5} alt="wave 5" />
        <img src={asset_3_6} alt="wave 6" />
      </div>

      <div className="content-overlay">

        {/* WHO WE ARE*/}
        <section className="content-grid">
          <h1>Who we are</h1>
          <h2>
              Student Leaders driven by{" "}
              <span className="highlight red">Passion</span>
           </h2>
          <img src={whoWeAre} alt="Who We Are" />
          <div className="content-body">
            <p>
              Google Developer Groups on Campus - Technological University of the Philippines 
              - Manila is a community of students from any academic undergraduate background 
              that aims to build professional and personal networks in technology, 
              specifically software engineering, and at the same time get access to Google
              developer resources and work together to build solutions for local problems in a 
              peer-to-peer learning environment.
            </p>
          </div>
          <div>
            <button className="btn-primary" onClick={() => navigate("/team")}>
              Meet the Team
            </button>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="content-grid reverse">
          <h1>What we do</h1>
          <h2>
              Build projects together with{" "}
              <span className="highlight yellow">Junior Googlers!</span>
          </h2>
          <img src={whatWeDo} alt="What We Do" />
          <div className="content-body">
            <p>
              We bridge the gap between theory and practice. We encourage
              passionate students to build projects that are relevant to solve
              problems in our community.
            </p>
          </div>
          <div>
            <button className="btn-primary" onClick={() => navigate("/project")}>
              Projects 
            </button>
          </div>
        </section>

        {/* WHAT YOU'LL GET */}
        <section className="content-grid">
          <h1>What you'll get</h1>
           <h2>
              Learn more about Google <br/>Technologies!{" "}
              <span className="highlight red">Flutter</span>{" "}
              <span className="highlight blue">Android,</span>{" "}<br/>
              <span className="highlight green">Tensorflow,</span>{" "}
              <span className="highlight yellow">Google Cloud,</span> and{" "}
              <span className="highlight red">Firebase</span>.
            </h2>
          <img src={whatYoullGet} alt="What you'll get" />
          <div className="content-body">
            <p>
              These are just one of the Technologies we're excited about. Grab
              the opportunity and challenge yourself to build real-life
              applications that solve problems within our community.
            </p>
          </div>
          <div>
            <button className="btn-primary">
              Codelabs 
               <svg width="16" height="16" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                  <path
                   d="M11.6667 8.08333V13.3333C11.6667 13.6428 11.5437 13.9395 11.325 14.1583C11.1062 14.3771 10.8094 14.5 10.5 14.5H1.16667C0.857247 14.5 0.560501 14.3771 0.341709 14.1583C0.122916 13.9395 0 13.6428 0 13.3333V4C0 3.69058 0.122916 3.39383 0.341709 3.17504C0.560501 2.95625 0.857247 2.83333 1.16667 2.83333H6.41667C6.57138 2.83333 6.71975 2.89479 6.82915 3.00419C6.93854 3.11358 7 3.26196 7 3.41667C7 3.57138 6.93854 3.71975 6.82915 3.82915C6.71975 3.93854 6.57138 4 6.41667 4H1.16667V13.3333H10.5V8.08333C10.5 7.92862 10.5615 7.78025 10.6709 7.67085C10.7802 7.56146 10.9286 7.5 11.0833 7.5C11.238 7.5 11.3864 7.56146 11.4958 7.67085C11.6052 7.78025 11.6667 7.92862 11.6667 8.08333ZM14 1.08333C14 0.928624 13.9385 0.780251 13.8291 0.670855C13.7197 0.561458 13.5714 0.5 13.4167 0.5H8.75C8.63456 0.499909 8.52169 0.534072 8.42568 0.598163C8.32966 0.662255 8.25483 0.753392 8.21064 0.860039C8.16645 0.966686 8.15489 1.08405 8.17744 1.19726C8.19999 1.31048 8.25562 1.41446 8.33729 1.49604L10.2586 3.41667L7.17062 6.50396C7.06117 6.61341 6.99968 6.76187 6.99968 6.91667C6.99968 7.07146 7.06117 7.21992 7.17062 7.32938C7.28008 7.43883 7.42854 7.50032 7.58333 7.50032C7.73813 7.50032 7.88658 7.43883 7.99604 7.32938L11.0833 4.24135L13.004 6.16271C13.0855 6.24438 13.1895 6.30001 13.3027 6.32256C13.416 6.3451 13.5333 6.33355 13.64 6.28936C13.7466 6.24517 13.8377 6.17034 13.9018 6.07432C13.9659 5.97831 14.0001 5.86544 14 5.75V1.08333Z"
                   fill="currentColor"
                   />
                 </svg>
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section className="content-grid reverse">
          <h1>FAQ s</h1>
          <img src={faqs} alt="FAQs" />
          <div className="content-body">
            <p> <span className="faq-question">Is there a Membership Fee?</span></p>
            <p>Google Developer Groups on Campus is a Student led Non-Profit
              Organization. We don't require any membership fees to our aspiring
              Junior Googlers.</p><br/>

            <p><span className="faq-question"> Are events held online or hybrid?</span></p>
            <p>The events can be held either online or in-person (face to face),
              depending on the circumstances and preferences.</p><br/>

            <p><span className="faq-question"> I'm not from TUP Manila, can I still join?</span></p>
            <p>Unfortunately, we only accept TUP Manila students as of the
              moment.</p><br/>
          </div>
        </section>
      <hr className="section-divider" />
      </div>

      <Footer />
    </section>
  );
}
