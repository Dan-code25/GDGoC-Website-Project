import styles from "../footer-section/Footer.module.css";
import logo from "../../assets/images/GDGOC logo.svg";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

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
                onClick={() => navigate("/UnderConstruction")}>
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

              <svg width="50" height="40" viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.gmailBlue} d="M11.175 39.8031V19.3036L5.28328 13.4875L0 10.2599V36.1855C0 38.1872 1.50295 39.8031 3.35259 39.8031H11.175Z" />
                <path className={styles.gmailGreen} d="M37.995 39.8031H45.8174C47.6726 39.8031 49.17 38.1811 49.17 36.1855V10.2601L43.1859 13.9569L37.995 19.3036V39.8031Z" />
                <path className={styles.gmailRed} d="M11.175 19.3036L10.3733 11.2939L11.175 3.62777L24.585 14.4804L37.995 3.62777L38.8917 10.88L37.995 19.3036L24.585 30.1563L11.175 19.3036Z" />
                <path className={styles.gmailYellow} d="M37.995 3.62777L37.995 19.3036L49.17 10.2601V5.43648C49.17 0.962902 44.4374 -1.58736 41.1242 1.09554L37.995 3.62777Z" />
                <path className={styles.gmailDarkRed} d="M0 10.2599L11.175 19.3036V3.62777L8.04583 1.09557C4.72685 -1.58753 0 0.962932 0 5.4363V10.2599Z" />
              </svg>
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
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7699 0H28.5699C34.9699 0 40.1699 5.2 40.1699 11.6V28.4C40.1699 31.4765 38.9478 34.427 36.7724 36.6024C34.5969 38.7779 31.6464 40 28.5699 40H11.7699C5.36992 40 0.169922 34.8 0.169922 28.4V11.6C0.169922 8.52349 1.39206 5.57298 3.56748 3.39756C5.74291 1.22214 8.69341 0 11.7699 0ZM11.3699 4C9.46036 4 7.62901 4.75857 6.27875 6.10883C4.92849 7.45909 4.16992 9.29044 4.16992 11.2V28.8C4.16992 32.78 7.38992 36 11.3699 36H28.9699C30.8795 36 32.7108 35.2414 34.0611 33.8912C35.4114 32.5409 36.1699 30.7096 36.1699 28.8V11.2C36.1699 7.22 32.9499 4 28.9699 4H11.3699ZM30.6699 7C31.333 7 31.9688 7.26339 32.4377 7.73223C32.9065 8.20107 33.1699 8.83696 33.1699 9.5C33.1699 10.163 32.9065 10.7989 32.4377 11.2678C31.9688 11.7366 31.333 12 30.6699 12C30.0069 12 29.371 11.7366 28.9022 11.2678C28.4333 10.7989 28.1699 10.163 28.1699 9.5C28.1699 8.83696 28.4333 8.20107 28.9022 7.73223C29.371 7.26339 30.0069 7 30.6699 7ZM20.1699 10C22.8221 10 25.3656 11.0536 27.241 12.9289C29.1164 14.8043 30.1699 17.3478 30.1699 20C30.1699 22.6522 29.1164 25.1957 27.241 27.0711C25.3656 28.9464 22.8221 30 20.1699 30C17.5178 30 14.9742 28.9464 13.0989 27.0711C11.2235 25.1957 10.1699 22.6522 10.1699 20C10.1699 17.3478 11.2235 14.8043 13.0989 12.9289C14.9742 11.0536 17.5178 10 20.1699 10ZM20.1699 14C18.5786 14 17.0525 14.6321 15.9273 15.7574C14.8021 16.8826 14.1699 18.4087 14.1699 20C14.1699 21.5913 14.8021 23.1174 15.9273 24.2426C17.0525 25.3679 18.5786 26 20.1699 26C21.7612 26 23.2873 25.3679 24.4126 24.2426C25.5378 23.1174 26.1699 21.5913 26.1699 20C26.1699 18.4087 25.5378 16.8826 24.4126 15.7574C23.2873 14.6321 21.7612 14 20.1699 14Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="36.0032"
                    y1="3.5"
                    x2="6.50323"
                    y2="40"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9000DC" />
                    <stop offset="0.359375" stopColor="#E41996" />
                    <stop offset="0.708333" stopColor="#FE5762" />
                    <stop offset="1" stopColor="#FECF1D" />
                  </linearGradient>
                </defs>
              </svg>
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
        <div className="d-flex flex-column align-items-center flex-md-row gap-4">
          <Link to='/' className={styles.home}>Home</Link>
          <a href="#" className={styles.events}>Events
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.6667 8.08333V13.3333C11.6667 13.6428 11.5437 13.9395 11.325 14.1583C11.1062 14.3771 10.8094 14.5 10.5 14.5H1.16667C0.857247 14.5 0.560501 14.3771 0.341709 14.1583C0.122916 13.9395 0 13.6428 0 13.3333V4C0 3.69058 0.122916 3.39383 0.341709 3.17504C0.560501 2.95625 0.857247 2.83333 1.16667 2.83333H6.41667C6.57138 2.83333 6.71975 2.89479 6.82915 3.00419C6.93854 3.11358 7 3.26196 7 3.41667C7 3.57138 6.93854 3.71975 6.82915 3.82915C6.71975 3.93854 6.57138 4 6.41667 4H1.16667V13.3333H10.5V8.08333C10.5 7.92862 10.5615 7.78025 10.6709 7.67085C10.7802 7.56146 10.9286 7.5 11.0833 7.5C11.238 7.5 11.3864 7.56146 11.4958 7.67085C11.6052 7.78025 11.6667 7.92862 11.6667 8.08333ZM14 1.08333C14 0.928624 13.9385 0.780251 13.8291 0.670855C13.7197 0.561458 13.5714 0.5 13.4167 0.5H8.75C8.63456 0.499909 8.52169 0.534072 8.42568 0.598163C8.32966 0.662255 8.25483 0.753392 8.21064 0.860039C8.16645 0.966686 8.15489 1.08405 8.17744 1.19726C8.19999 1.31048 8.25562 1.41446 8.33729 1.49604L10.2586 3.41667L7.17062 6.50396C7.06117 6.61341 6.99968 6.76187 6.99968 6.91667C6.99968 7.07146 7.06117 7.21992 7.17062 7.32938C7.28008 7.43883 7.42854 7.50032 7.58333 7.50032C7.73813 7.50032 7.88658 7.43883 7.99604 7.32938L11.0833 4.24135L13.004 6.16271C13.0855 6.24438 13.1895 6.30001 13.3027 6.32256C13.416 6.3451 13.5333 6.33355 13.64 6.28936C13.7466 6.24517 13.8377 6.17034 13.9018 6.07432C13.9659 5.97831 14.0001 5.86544 14 5.75V1.08333Z"
                fill="currentColor"
              />
            </svg>
          </a>
        <Link to='/project' className={styles.project}>Project</Link>
        <Link to='/team' className={styles.team}>Team</Link>
        </div>
        <p className={styles.copyright}>&copy; 2025 Google Developer Groups on Campus TUP Manila. <br/> All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;