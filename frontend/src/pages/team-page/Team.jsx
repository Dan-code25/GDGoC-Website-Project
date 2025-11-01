import React, { useEffect } from "react";
// components
import Navbar from "../../components/navigation-bar/Navbar";
import Footer from "../../components/footer-section/Footer";
import HeroText from "../../components/hero-text/Herotext";
import DeptHeader from '../../components/department-header/deptHeader';

// styles
import heroStyles from "../../components/hero-text/Herotext.module.css";
import styles from '../team-page/Team.module.css';
import deptStyles from "../../components/department-header/deptHeader.module.css";

// images
import EB from "../../assets/images/team-images/EB/EBimages";
import Monilar from '../../assets/images/team-images/advisers/Monilar.svg';
import Tech from "../../assets/images/team-images/TECHNOLOGY DEPARTMENT/techImages";
import Comm from "../../assets/images/team-images/COMMUNICATION DEPARTMENT/commImages";
import Oper from "../../assets/images/team-images/OPERARTIONS DEPARTMENT/operations";
import Innov from "../../assets/images/team-images/INNOVATIONS DEPARTMENT/innovations";
import HR from "../../assets/images/team-images/HR DEPARTMENT/hr";
import Finance from "../../assets/images/team-images/FINANCE/finance";
import Rel from "../../assets/images/team-images/RELATIONS DEPARTMENT/relations";
import Googlet from "../../assets/images/team-images/GOOGLET/googlet";

function Team(){
  useEffect(() => {
    document.title = "Team | GDGoC TUPM";
  }, []);

  return(
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Navbar />
      <HeroText 
        header = "Welcome to the Team!"
        subtext = {
          <>
            The <span className={heroStyles.highlight1}>team</span> that <span className={heroStyles.highlight2}>empowers</span>, <span className={heroStyles.highlight3}>enlightens</span>, and <span className={heroStyles.highlight4}>nurtures</span> student developers at <br />TUP Manila for the 2023-2024 academic year!
          </>
        }
      />

      {/* Executives Board Layout */}
      <div className={`align-items-center justify-content-center ${styles.margin} mx-4 mt-4`}>
        <h1 className={`${styles.department} m-0 p-0`}>Executive Board Officers</h1>
      </div>
      
      <div className={styles.containerEB}>
        <div className={`${styles.span2} d-flex justify-content-center`}>
          <a href="https://www.linkedin.com/in/kienserapio" target="_blank" className={styles.imgContainer}>
            <img src={EB.Serapio} alt="Kien Leriss R. Serapio" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/micoabas" target="_blank" className={styles.imgContainer}>
            <img src={EB.Abas} alt="Jhondel Mico Abas" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
          <a href="https://www.linkedin.com/in/josh-j-pantalunan" target="_blank" className={styles.imgContainer}>
            <img src={EB.Pantalunan} alt="Josh Pantalunan" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/hannah-ropeta" target="_blank" className={styles.imgContainer}>
            <img src={EB.Ropeta} alt="Hannah Lorraine Ropeta" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/alfredmreyes/" target="_blank" className={styles.imgContainer}>
            <img src={EB.Reyes} alt="Alfred Reyes" className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/luke-renacido" target="_blank" className={styles.imgContainer}>
            <img src={EB.Renacido} alt="Luke Joseph Renacido" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/zendysantos" target="_blank" className={styles.imgContainer}>
            <img src={EB.Zendy} alt="Zendy Santos" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/jefferson-padua-730952381" target="_blank" className={styles.imgContainer}>
            <img src={EB.Padua} alt="Jefferson Padua" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/judetabuzo" target="_blank" className={styles.imgContainer}>
            <img src={EB.Tabuzo} alt="Jude S. Tabuzo Jr." className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ford-torion" target="_blank" className={styles.imgContainer}>
            <img src={EB.Torion} alt="Clifford Roy E. Torion" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/racy-ledres" target="_blank" className={`${styles.imgContainer} d-lg-none`}>
            <img src={EB.Ledres} alt="Racy Jhanna D. Ledres" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/maria-leonabelle-santos" target="_blank" className={`${styles.imgContainer} d-md-none`}>
            <img src={EB.Santos} alt="Maria Leonabelle Santos" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <div className={`${styles.span2} d-flex justify-content-center`}>
            <a href="https://www.linkedin.com/in/racy-ledres" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex`}>
              <img src={EB.Ledres} alt="Racy Jhanna D. Ledres" className={styles.image}/>
              <div className={styles.blueContainer}>
                <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/maria-leonabelle-santos" target="_blank" className={`${styles.imgContainer} d-none d-md-flex`}>
              <img src={EB.Santos} alt="Maria Leonabelle Santos" className={styles.image}/>
              <div className={styles.redContainer}>
                <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/mitchangelamaisog" target="_blank" className={styles.imgContainer}>
              <img src={EB.Maisog} alt="Mitch Angela Maisog" className={styles.image}/>
              <div className={styles.yellowContainer}>
                <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
              </div>
            </a>
          </div>
      </div>

      {/* Faculty Adviser */}
      <div className={`align-items-center justify-content-center ${styles.margin} `}>
        <h1 className={`${styles.department} m-0 p-0`}>Faculty Adviser</h1>
      </div>
      <a href="#" target="_blank" className={styles.imgContainer}>
        <img src={Monilar} alt="Engr. Edmund G. Monilar" className={styles.image}/>
        <div className={styles.greenContainer}>
          <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
        </div>
      </a>

      {/* GDGoC DEPARTMENTS */}
      <div className="align-items-center justify-content-center m-5">
        <h1 className={`${heroStyles.header} m-0 p-0`}>GDGoC TUPM Departments</h1>
      </div>

      {/* Technology Department */}
      <DeptHeader 
        header = 'Technology Department'
        subtext={
          <>
            The Technology Department, comprising <span className={deptStyles.highlight1}>committed students</span>, <span className={deptStyles.highlight2}>conceives</span>, <span className={deptStyles.highlight3}>develops</span>, and <span className={deptStyles.highlight4}>implements</span> diverse activities, including workshops and internal projects across various technology sectors.
         </>
        }
      />

      <div className={`${styles.containerTech} mt-3`}>
        <a href="https://www.linkedin.com/in/reign-ivann-bigol-b465b1343/" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Bigol} alt="Reign Ivann Bigol" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/sharmaine-hannah-valenzuela-238609383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdjhUdGxYdHBPYjVYQ0F5VQEetQ5XxHHOGr2c5R3pi4vea8S_MUGT0TcMtrlSp-9XSOZP-RBu0xXMLZIK0OQ_aem_3NCxoY5faoJK7KJ1iTtTzA" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Valenzuela} alt="Sharmaine Hannah Valenzuela" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/vince-santos-116471381/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdjhUdGxYdHBPYjVYQ0F5VQEeIOpXfyAqMd5BBm4uighb6VZ55nLSp-xvbueMpyi1OTYK5BrWisuiZvQu708_aem_dEEvje4rTA2ZADLLnrD9iw" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Santos} alt="Vince Merick Santos" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/lowel-rubino-469216197/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdjhUdGxYdHBPYjVYQ0F5VQEedQjrKBwSnV01JG09DN7kHkQKUAq_MUbWNBiaM6wCOtYDTrAz7StxziXIHsk_aem_RD3ywd4JuZ2AE8nrCflD1w" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Rubino} alt="Lowel Jay Rubino" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/dan-jheniel-bringas-8a898035a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Bringas} alt="Dan Jheniel P. Bringas" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/irwenfronda/" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Fronda} alt="Irwen G. Fronda" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="http://www.linkedin.com/in/catherine-mae-dela-cruz-4448a6381" target="_blank" className={styles.imgContainer}>
          <img src={Tech.DelaCruz} alt="Catherine Mae G. Dela Cruz" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="#" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Flores} alt="Iñaki Flores" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/alexander-galedo/" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Galedo} alt="Alex Galedo" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/eldian-maxi-punzalan/" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Punzalan} alt="Eldian Maxi D. Punzalan" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/sean-lucino-84686332a/" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Lucino} alt="Sean V. Lucino" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="#" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Arboleda} alt="Nicolas Angelo Arboleda" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/johnred-dumalagan-bb2092326/" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Dumalagan} alt="Red Dumalagan" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/axel-magallanes-39b084294/" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Magallanes} alt="Axel Magallanes" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/christan-ray-aningat-a6532036b/" target="_blank" className={styles.imgContainer}>
          <img src={Tech.Aningat} alt="Christan Aningat" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="http://www.linkedin.com/in/jamesivanmatienzo" target="_blank" className={`${styles.imgContainer} d-md-none d-lg-flex`}>
          <img src={Tech.Matienzo} alt="James Ivan Matienzo" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <div className={`${styles.span2} d-flex justify-content-center`}>
          <a href="http://www.linkedin.com/in/jamesivanmatienzo" target="_blank" className={`${styles.imgContainer} d-none d-md-flex d-lg-none`}>
            <img src={Tech.Matienzo} alt="James Ivan Matienzo" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/amiel-keith-padilla-6684a0381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className={styles.imgContainer}>
            <img src={Tech.Padilla} alt="Amiel Keith E. Padilla" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="#" target="_blank" className={styles.imgContainer}>
            <img src={Tech.Solitario} alt="Ezekiel Jairus V. Solitario" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
      </div>

      {/* Communications Department */}
      <DeptHeader 
        header='Communications Department'
        subtext={
          <>
            The Communications Department endeavors to <span className={deptStyles.highlight1}>formulate innovative</span>, <span className={deptStyles.highlight2}>execute</span>, <span className={deptStyles.highlight3}>efficient</span> and <span className={deptStyles.highlight4}>sustain</span> impactful marketing strategies, cultivating a robust brand identity for our programs and events to reach a broader audience.
          </>
        }
      />

      <div className={`${styles.containerComm} mt-3`}>
        <a href="https://www.linkedin.com/in/nicole-drew-lazo-014bab327/" target="_blank" className={styles.imgContainer}>
          <img src={Comm.Lazo} alt="Nicole Drew Lazo" className={styles.image}/>
          <div className={styles.redContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="" target="_blank" className={styles.imgContainer}>
          <img src={Comm.Alcantara} alt="Juztynne Dhenielle Alcantara" className={styles.image}/>
          <div className={styles.redContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="" target="_blank" className={styles.imgContainer}>
          <img src={Comm.Rentoria} alt="Jose S. Rentoria" className={styles.image}/>
          <div className={styles.redContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/liljanria-nicole-g-dequi%C3%B1a-4503a7377" target="_blank" className={styles.imgContainer}>
          <img src={Comm.Liljanria} alt="Liljanria Nicole Dequiña" className={styles.image}/>
          <div className={styles.redContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/samantha-egar-84a27933b" target="_blank" className={`${styles.imgContainer} d-lg-none`}>
          <img src={Comm.Egar} alt="Samantha Egar" className={`${styles.image}`}/>
          <div className={styles.redContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="" target="_blank" className={`${styles.imgContainer} d-lg-none`}>
          <img src={Comm.Dabao} alt="Jamie Andrea Dabao" className={styles.image}/>
          <div className={styles.redContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <div className={`${styles.span2} d-flex justify-content-center`}>
          <a href="https://www.linkedin.com/in/samantha-egar-84a27933b" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex`}>
            <img src={Comm.Egar} alt="Samantha Egar" className={`${styles.image}`}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex`}>
            <img src={Comm.Dabao} alt="Jamie Andrea Dabao" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/may-corto" target="_blank" className={styles.imgContainer}>
            <img src={Comm.Corto} alt="May Corto" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="" target="_blank" className={styles.imgContainer}>
            <img src={Comm.Gayanes} alt="Prince Kyle Gayanes" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className={`${styles.span2} d-flex justify-content-center`}>
          <a href="" target="_blank" className={styles.imgContainer}>
            <img src={Comm.Mique} alt="Aldred Mique" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/marc-john-lloyd-rivera-578978321" target="_blank" className={styles.imgContainer}>
            <img src={Comm.Rivera} alt="Marc John Lloyd Rivera" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
      </div> 

      {/* Operations Department */}
      <DeptHeader 
        header='Operations Department'
        subtext={
          <>
            The Operations team ensures <span className={deptStyles.highlight1}>seamless</span>, <span className={deptStyles.highlight2}>successful events</span>, <span className={deptStyles.highlight3}>plans</span> and <span className={deptStyles.highlight4}>achieves</span> yearly goals, supporting chapter growth and member enrichment with cause-aligned activities.
          </>
        }
      />

      <div className={`${styles.containerOper} mt-3`}>
        <a href="https://www.linkedin.com/in/kiannagragg" target="_blank" className={styles.imgContainer}>
          <img src={Oper.Gragg} alt="Kianna Alexandra L. Gragg" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/krizza-angel-dela-cruz-3420ba300/" target="_blank" className={styles.imgContainer}>
          <img src={Oper.DelaCruz} alt="Krizza Angel C. Dela Cruz" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/walt-emerson-rimando-841533311" target="_blank" className={styles.imgContainer}>
          <img src={Oper.Rimando} alt="Walt Emerson A. Rimando" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="" target="_blank" className={styles.imgContainer}>
          <img src={Oper.Mejia} alt="Francisco S. Mejia" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/keith-nicole-fontanilla-854a71381/" target="_blank" className={styles.imgContainer}>
          <img src={Oper.Fontanilla} alt="Keith Nicole Fontanilla" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="" target="_blank" className={styles.imgContainer}>
          <img src={Oper.Sia} alt="John Gabriel R. Sia" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/etienne-lagana-750a55381" target="_blank" className={styles.imgContainer}>
          <img src={Oper.Prince} alt="Etienne Prince T. Lagaña" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/loraine-angela-alagano-88a662317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className={styles.imgContainer}>
          <img src={Oper.Alagano} alt="Loraine Angela U. Alagano" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/dianne-taguibao" target="_blank" className={styles.imgContainer}>
          <img src={Oper.Taguibao} alt="Dianne Y. Taguibao" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/mark-jairielle-equizabal-38b809381" target="_blank" className={styles.imgContainer}>
          <img src={Oper.Equizabal} alt="Mark Jairielle F. Equizabal" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="" target="_blank" className={styles.imgContainer}>
          <img src={Oper.Papa} alt="Kyle Francis O. Papa" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/miles-domondon-a64214381/" target="_blank" className={styles.imgContainer}>
          <img src={Oper.Domondon} alt="Miles N. Domondon" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/kyle-manlapaz-1024a5381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className={`${styles.imgContainer} d-lg-none`}>
          <img src={Oper.Manlapaz} alt="Kyle Andrew J. Manlapaz" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/vetina-gene-clavaton-77a4a6381/" target="_blank" className={`${styles.imgContainer} d-lg-none`}>
          <img src={Oper.Clavaton} alt="Vetina Gene F. Clavaton" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/rshiann" target="_blank" className={`${styles.imgContainer} d-none d-md-flex d-lg-none`}>
          <img src={Oper.Sinag} alt="Rash Ian B. Sinag" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <div className={`${styles.span2} d-flex justify-content-center d-md-none d-lg-flex`}>
          <a href="https://www.linkedin.com/in/kyle-manlapaz-1024a5381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex`}>
            <img src={Oper.Manlapaz} alt="Kyle Andrew J. Manlapaz" className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/vetina-gene-clavaton-77a4a6381/" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex`}>
            <img src={Oper.Clavaton} alt="Vetina Gene F. Clavaton" className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/rshiann" target="_blank" className={styles.imgContainer}>
            <img src={Oper.Sinag} alt="Rash Ian B. Sinag" className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a> 
        </div>      
      </div>

      {/* Innovations Department */}
      <DeptHeader 
        header='Innovations Department'
        subtext={
          <>
            The Innovations Department aims to come up with <span className={deptStyles.highlight1}>cool solutions</span> for the <span className={deptStyles.highlight2}>common good</span>, <span className={deptStyles.highlight3}>connecting tech</span> and <span className={deptStyles.highlight4}>society</span>. It's where ideas pop up, get discussed, and maybe turned into cash if they make a real impact.
          </>
        }
      />

      <div className={`${styles.containerInnov} mt-3`}>
        <a href="https://www.linkedin.com/in/mark-lucto-152657328" target="_blank" className={styles.imgContainer}>
          <img src={Innov.Lucto} alt="Mark Christian L. Lucto" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/khinito-pe%C3%B1amante-3b374b381/" target="_blank" className={styles.imgContainer}>
          <img src={Innov.Khinito} alt="Khinito Christian C. Peñamente" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/kyle-louise-lota" target="_blank" className={styles.imgContainer}>
          <img src={Innov.Lota} alt="Kyle Louise A. Lota" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/nicholas-andrew-alcantara-840250327" target="_blank" className={`${styles.imgContainer} d-md-none d-lg-flex`}>
          <img src={Innov.Alcantara} alt="Nicholas Andrew L. Alcantara" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ed-mcbille-paraiso-745871378/" target="_blank" className={`${styles.imgContainer} d-md-none`}>
          <img src={Innov.Paraiso} alt="Ed Mcbille C. Paraiso" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ethan-lee-susara-61ab22381/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className={`${styles.imgContainer} d-md-none`}>
          <img src={Innov.Susara} alt="Ethan Lee M. Susara" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <div className={`${styles.span2} d-flex justify-content-center d-none d-md-flex d-lg-none`}>
          <a href="https://www.linkedin.com/in/nicholas-andrew-alcantara-840250327" target="_blank" className={`${styles.imgContainer}`}>
            <img src={Innov.Alcantara} alt="Nicholas Andrew L. Alcantara" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ed-mcbille-paraiso-745871378/" target="_blank" className={`${styles.imgContainer}`}>
            <img src={Innov.Paraiso} alt="Ed Mcbille C. Paraiso" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className={`${styles.span2} d-flex justify-content-center`}>
          <a href="https://www.linkedin.com/in/ed-mcbille-paraiso-745871378/" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex`}>
            <img src={Innov.Paraiso} alt="Ed Mcbille C. Paraiso" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ethan-lee-susara-61ab22381/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className={`${styles.imgContainer} d-none d-md-flex`}>
            <img src={Innov.Susara} alt="Ethan Lee M. Susara" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="http://linkedin.com/in/chrystel-baladjay-607825378?originalSubdomain=phhttps://www.linkedin.com/in/chrystel-baladjay-607825378" target="_blank" className={styles.imgContainer}>
            <img src={Innov.Baladjay} alt="Chrystel G. Baladjay" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
      </div>

      {/* Human Resource Department */}
      <DeptHeader 
        header='Human Resource Department'
        subtext={
          <>
            The Human Resources department fosters <span className={deptStyles.highlight1}>member growth</span>, <span className={deptStyles.highlight2}>evaluates performance</span>, <span className={deptStyles.highlight3}>promotes collaboration</span>, and <span className={deptStyles.highlight4}>enhances partnerships</span> for organizational development.
          </>
        }
      />

      <div className={`${styles.containerHR} mt-3`}>
        <a href="" target="_blank" className={styles.imgContainer}>
          <img src={HR.Balberan} alt="Jhan Leur L. Balberan" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/louise-andrea-concepcion-927a21351" target="_blank" className={styles.imgContainer}>
          <img src={HR.Concepcion} alt="Louise Andrea B. Concepcion" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="" target="_blank" className={styles.imgContainer}>
          <img src={HR.Layam} alt="Ailyn C. Layam" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/jewel-sarvida-b4b57536b/" target="_blank" className={styles.imgContainer}>
          <img src={HR.Sarvida} alt="Jewel R. Sarvida" className={styles.image}/>
          <div className={styles.blueContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
      </div>

      {/* Finance Department */}
      <DeptHeader 
        header='Finance Department'
        subtext={
          <>
            The Finance department spearheads the organization's <span className={deptStyles.highlight1}>financial activities</span> and orchestrates impactful <span className={deptStyles.highlight2}>external relations</span>, cultivating <span className={deptStyles.highlight3}>strategic collaborations</span> with <span className={deptStyles.highlight4}>organizations</span>, universities, non-governmental entities, and government agencies.
          </>
        }
      />

      <div className={`${styles.containerFin} mt-3`}>
        <a href="https://www.linkedin.com/in/gerardo-sison-309959381/" target="_blank" className={styles.imgContainer}>
          <img src={Finance.Sison} alt="Gerardo B. Sison Jr." className={styles.image}/>
          <div className={styles.redContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/mark-lorenz-etang-97a955381/" target="_blank" className={styles.imgContainer}>
          <img src={Finance.Etang} alt="Mark Lorenz G. Etang" className={styles.image}/>
          <div className={styles.redContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/pvbflores/" target="_blank" className={styles.imgContainer}>
          <img src={Finance.Flores} alt="Princess Venice Flores" className={styles.image}/>
          <div className={styles.redContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/rainiel-nava-0b9650381/" target="_blank" className={`${styles.imgContainer} d-md-none d-lg-flex`}>
          <img src={Finance.Nava} alt="Rainiel E. Nava" className={styles.image}/>
          <div className={styles.redContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/roshny-cruz-i-31a4a8381/" target="_blank" className={`${styles.imgContainer} d-md-none`}>
          <img src={Finance.Lerios} alt="Lianne Princess P. Lerios" className={styles.image}/>
          <div className={styles.redContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/roshny-cruz-i-31a4a8381/" target="_blank" className={`${styles.imgContainer} d-md-none`}>
          <img src={Finance.Cruz} alt="Roshny Jen Cruz" className={styles.image}/>
          <div className={styles.redContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <div className={`${styles.span2} d-flex justify-content-center d-none d-md-flex d-lg-none`}>
          <a href="https://www.linkedin.com/in/rainiel-nava-0b9650381/" target="_blank" className={`${styles.imgContainer}`}>
            <img src={Finance.Nava} alt="Rainiel E. Nava" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/roshny-cruz-i-31a4a8381/" target="_blank" className={`${styles.imgContainer}`}>
            <img src={Finance.Lerios} alt="Lianne Princess P. Lerios" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className={`${styles.span2} d-flex justify-content-center`}>
          <a href="https://www.linkedin.com/in/roshny-cruz-i-31a4a8381/" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex`}>
            <img src={Finance.Lerios} alt="Lianne Princess P. Lerios" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/roshny-cruz-i-31a4a8381/" target="_blank" className={`${styles.imgContainer} d-none d-md-flex`}>
            <img src={Finance.Cruz} alt="Roshny Jen Cruz" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/julie-ann-palmiano/" target="_blank" className={styles.imgContainer}>
            <img src={Finance.Palmiano} alt="Julie Ann S. Palmiano" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
      </div>
      
      {/* Relations Department */}
      <DeptHeader 
       header='Relations Department'
       subtext={
        <>
          The Relations department manages <span className={deptStyles.highlight1}>collaborative activities</span> within the <span className={deptStyles.highlight2}>organization</span>, while also <span className={deptStyles.highlight3}>handling external relations</span>, specifically <span className={deptStyles.highlight4}>coordinating partnerships</span> with organizations, universities, non-governmental organizations, and government agencies.
        </>
       }
      />

      <div className={`${styles.containerRel} mt-3`}>
        <a href="https://www.linkedin.com/in/thea-delda-31b89732a" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Rel.Delda} alt="Thea Delda" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/dwynescott/" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Rel.Japay} alt="Dwyne Scott Japay" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/gvan-antoni-rocas-716a69355" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Rel.Rocas} alt="Gvan Antoni Rocas" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Rel.Azores} alt="Eunice Juliana Azores" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/joana-daniel-albaladejo-b23a5422a/" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Rel.Albaladejo} alt="Joana Daniel Albaladejo" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/sophia-lorraine-banting-273748381/" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Rel.Banting} alt="Sophia Lorraine Banting" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/alltessa-jane-rosimo-a94bba381" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Rel.Rosimo} alt="Altessa Jane Rosimo" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/maxime-salamat-4650522b4" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Rel.Salamat} alt="Maxime Salamat" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/jannah-kate-catoy-b81011373" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Rel.Catoy} alt="Jannah Kate Catoy" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/andrian-veliganio-3b9813381" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Rel.Veliganio} alt="Andrian Veliganio" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Rel.Videl} alt="Antonio Videl" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/camillealvarez17/" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Rel.Alvarez} alt="Aiza Camille Alvarez" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/rouise-nicole-yumul-13bb62381/" target="_blank" className={`${styles.imgContainer} d-lg-none`}>
          <img src={Rel.Yumul} alt="Rouise Nicole Yumul" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/mikylla-tabamo-49a526338/" target="_blank" className={`${styles.imgContainer} d-lg-none`}>
          <img src={Rel.Tabamo} alt="Jan Mikylla Tabamo" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/dionne-margaret-vito-595a06383/" target="_blank" className={`${styles.imgContainer} d-none d-md-flex d-lg-none`}>
          <img src={Rel.Vito} alt="Dionne Margaret Vito" className={styles.image}/>
          <div className={styles.yellowContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <div className={`${styles.span2} d-flex justify-content-center d-md-none d-lg-flex`}>
          <a href="https://www.linkedin.com/in/rouise-nicole-yumul-13bb62381/" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex`}>
            <img src={Rel.Yumul} alt="Rouise Nicole Yumul" className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mikylla-tabamo-49a526338/" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex`}>
            <img src={Rel.Tabamo} alt="Jan Mikylla Tabamo" className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/dionne-margaret-vito-595a06383/" target="_blank" className={`${styles.imgContainer}`}>
            <img src={Rel.Vito} alt="Dionne Margaret Vito" className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
      </div>

      {/* Googlet Department */}
      <DeptHeader 
        header='Googlet Department'
        subtext={
          <>
            The Googlet Department meticulously <span className={deptStyles.highlight1}>plans</span> and <span className={deptStyles.highlight2}>executes</span> the creation of our <span className={deptStyles.highlight3}>organization's merchandise</span>, ensuring <span className={deptStyles.highlight4}>high-quality products</span> aligned with our brand identity to drive revenue and enhance our image.
          </>
        }
      />

      <div className={`${styles.containerGoog} mt-3 mb-5`}>
        <a href="https://www.linkedin.com/in/carla-mae-cardano-57a148296" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Googlet.Cardano} alt="Carla Mae S. Cardano" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/charlotenano/" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Googlet.Nano} alt="Lady Charlote A. Nano" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/denisse-heart-tero-865662357" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Googlet.Tero} alt="Denisse Heart H. Tero" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/toni-ahn-narra-703421299" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Googlet.Narra} alt="Toni Ahn B. Narra" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Googlet.Ali} alt="Jasmine D. Ali" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Googlet.Recto} alt="Pia Loraine B. Recto" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/jovielyneguillos3877" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Googlet.Eguillos} alt="Jovelyn N. Eguillos" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/samantha-michelle-tumala-9ab0b8382" target="_blank" className={`${styles.imgContainer}`}>
          <img src={Googlet.Tumala} alt="Samantha Michelle G. Tumala" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/jaymie-aquino-243111382" target="_blank" className={`${styles.imgContainer} d-lg-none`}>
          <img src={Googlet.Aquino} alt="Jaymie Lee C. Aquino" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ryu-narawa-6b11b1372" target="_blank" className={`${styles.imgContainer} d-md-none`}>
          <img src={Googlet.Narawa} alt="Ryu A. Narawa" className={styles.image}/>
          <div className={styles.greenContainer}>
            <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
          </div>
        </a>
        <div className={`${styles.span2} d-flex justify-content-center d-none d-md-flex`}>
          <a href="https://www.linkedin.com/in/jaymie-aquino-243111382" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex`}>
            <img src={Googlet.Aquino} alt="Jaymie Lee C. Aquino" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ryu-narawa-6b11b1372" target="_blank" className={`${styles.imgContainer}`}>
            <img src={Googlet.Narawa} alt="Ryu A. Narawa" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Team;