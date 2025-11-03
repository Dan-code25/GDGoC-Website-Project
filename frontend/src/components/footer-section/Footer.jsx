import styles from "../footer-section/Footer.module.css";
import logo from "../../assets/images/GDGOC logo.png";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import gmailDefault from "../../assets/images/footer-images/GMAIL DEFAULT.svg";
import gmailHover from "../../assets/images/footer-images/GMAIL HOVER.svg";
import igDefault from "../../assets/images/footer-images/INSTAGRAM.svg";
import igHover from "../../assets/images/footer-images/INSTAGRAM_HOVER.svg";

function Footer(){
  const navigate = useNavigate();
  return(
    <div className={styles.mainContainer}>
      <div className={`${styles.footerContainer} d-flex flex-column align-items-center flex-md-row justify-content-between`}>
        <div className="d-flex flex-column align-items-center align-items-md-start">
          <h1 className={styles.footerTitle}>Let's connect!</h1>
            <h3 className={`${styles.footerSubtext} text-center text-md-start`}>Want to be part of our community? Have something in mind?</h3>
            <div className={`${styles.buttonSection} d-flex flex-row justify-content-center align-items-center gap-3`}>
              <button className={styles.btnprimary} 
                onClick={() =>  window.open("https://forms.gle/vfEcZzgwc1ugVaCTA", "_blank")}>
                Join us!
              </button>
              <button className={styles.btnsecondary} 
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeGj3Hr-DPiiv1nc_7QdiKkWpH92Ry0ZMTYHdLxVDi-RXafGA/viewform", "_blank")}>
                Message us!
              </button>
            </div>
        </div>
        <div className="d-flex flex-column align-items-center align-items-md-start">
          <h1 className={styles.footerTitle}>Keep up with us!</h1>
          <h3 className={`${styles.footerSubtext} text-center text-md-start`}>Join us on our digital adventures across various platforms!</h3> 
         
          {/* Social media buttons */}
          <div className={`${styles.buttonSection} d-flex flex-row justify-content-center align-items-center`}>
            <a className={styles.gmailButton}
               href="https://mail.google.com/mail/?view=cm&to=gdsctupm@tup.edu.ph"
               target="_blank"
               rel="noopener noreferrer"
            >
              <img src={gmailDefault} alt="" className={styles.default}/>
              <img src={gmailHover} alt="" className={styles.hovered}/>
            </a>
            <a className={styles.facebookButton}
              href="https://www.facebook.com/GDGonCampusTUPManila"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="42" height="40" viewBox="0 0 42 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M42 20.0501C42 8.98246 32.592 0 21 0C9.408 0 0 8.98246 0 20.0501C0 29.7544 7.224 37.8346 16.8 39.6992V26.0652H12.6V20.0501H16.8V15.0376C16.8 11.1679 20.097 8.02005 24.15 8.02005H29.4V14.0351H25.2C24.045 14.0351 23.1 14.9373 23.1 16.0401V20.0501H29.4V26.0652H23.1V40C33.705 38.9975 42 30.4561 42 20.0501Z"/>
              </svg>
            </a>
            <a className={styles.instagramButton}
                href="https://www.instagram.com/gdgoctup/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img src={igDefault} alt="" className={styles.default}/>
              <img src={igHover} alt="" className={styles.hovered}/>  
            </a>
            <a className={styles.twitterButton}
              href="https://x.com/GDSCTUPManila"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="49"
                height="40"
                viewBox="0 0 49 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49 4.70588C47.1965 5.52941 45.2524 6.07059 43.238 6.32941C45.2992 5.08235 46.892 3.10588 47.6415 0.729412C45.6974 1.90588 43.5425 2.72941 41.2706 3.2C39.4202 1.17647 36.8203 0 33.869 0C28.3647 0 23.8676 4.51765 23.8676 10.0941C23.8676 10.8941 23.9613 11.6706 24.1252 12.4C15.7868 11.9765 8.36185 7.95294 3.41969 1.85882C2.55306 3.34118 2.06119 5.08235 2.06119 6.91765C2.06119 10.4235 3.81788 13.5294 6.53489 15.2941C4.87189 15.2941 3.326 14.8235 1.9675 14.1176V14.1882C1.9675 19.0824 5.43403 23.1765 10.0249 24.0941C8.55094 24.4993 7.00357 24.5557 5.5043 24.2588C6.14047 26.2647 7.38639 28.0198 9.06691 29.2775C10.7474 30.5352 12.7781 31.2322 14.8733 31.2706C11.3216 34.0951 6.91902 35.6219 2.3891 35.6C1.59273 35.6 0.796367 35.5529 0 35.4588C4.45029 38.3294 9.74379 40 15.412 40C33.869 40 44.011 24.6118 44.011 11.2706C44.011 10.8235 44.011 10.4 43.9876 9.95294C45.9551 8.54118 47.6415 6.75294 49 4.70588Z"
                  fill="#1D9BF0"
                />
              </svg>
            </a>
            <a className={styles.linkedinButton}
                href="https://www.linkedin.com/company/gdgoctupmanila"
                target="_blank"
                rel="noopener noreferrer"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.3333 0C36.5047 0 37.6281 0.465326 38.4564 1.29361C39.2847 2.1219 39.75 3.24529 39.75 4.41667V35.3333C39.75 36.5047 39.2847 37.6281 38.4564 38.4564C37.6281 39.2847 36.5047 39.75 35.3333 39.75H4.41667C3.24529 39.75 2.1219 39.2847 1.29361 38.4564C0.465326 37.6281 0 36.5047 0 35.3333V4.41667C0 3.24529 0.465326 2.1219 1.29361 1.29361C2.1219 0.465326 3.24529 0 4.41667 0H35.3333ZM34.2292 34.2292V22.525C34.2292 20.6157 33.4707 18.7845 32.1206 17.4344C30.7705 16.0843 28.9393 15.3258 27.03 15.3258C25.1529 15.3258 22.9667 16.4742 21.9067 18.1967V15.7454H15.7454V34.2292H21.9067V23.3421C21.9067 21.6417 23.2758 20.2504 24.9762 20.2504C25.7962 20.2504 26.5826 20.5761 27.1624 21.1559C27.7422 21.7357 28.0679 22.5221 28.0679 23.3421V34.2292H34.2292ZM8.56833 12.2783C9.55229 12.2783 10.4959 11.8875 11.1917 11.1917C11.8875 10.4959 12.2783 9.55229 12.2783 8.56833C12.2783 6.51458 10.6221 4.83625 8.56833 4.83625C7.57852 4.83625 6.62925 5.22945 5.92935 5.92935C5.22945 6.62925 4.83625 7.57852 4.83625 8.56833C4.83625 10.6221 6.51458 12.2783 8.56833 12.2783ZM11.6379 34.2292V15.7454H5.52083V34.2292H11.6379Z"
                  fill="#0077B7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Sub footer */}
      <div className={`${styles.subFooter} d-flex flex-column align-items-center justify-content-center`}>
        <img src={logo} alt="GDGoC-logo" className={styles.logo} />
        <p className={styles.copyright}>&copy; 2025 Google Developer Groups on Campus TUP Manila. <br/> All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;