import React from 'react';
import './Home.css';
import Bharat_img from '../../assets/Bharat_img.png';
import ProjectDetail from './Home_project/ProjectDetail';
import styles from './Home_project/ProjectDetail.module.css';
import { useInView } from 'react-intersection-observer';

function Home() {

  const { ref: section1Ref, inView: section1InView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const { ref: section2Ref, inView: section2InView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  
  const { ref: section3Ref, inView: section3InView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <>
      <main>
        <section className={`home ${section1InView ? 'in-view' : ''}`} ref={section1Ref}>
          <img src={Bharat_img} alt="Bharat_Image" loading='lazy'/>
          <div className="home_detail">
            <h1 className="home_heading">Welcome to my portfolio !</h1>
            <h3 className="home_punchline">
              Building Responsive and Interactive Web Interfaces with Precision
            </h3>
            <p className="home_parha">
              I'm{' '}
              <span className="home_myName">
                <i>Bharat Kumar</i>
              </span>
              , a passionate and dedicated front-end developer with a keen eye for design
              and a love for coding. I specialize in creating responsive, interactive, and
              visually appealing websites that provide a seamless user experience. With a
              strong foundation in HTML, CSS, JavaScript, and modern frameworks, I bring
              ideas to life on the web. Let's build something amazing together!
            </p>
          </div>
        </section>
        <ProjectDetail
          mainHeading={'Current Project'}
          projectName={'Laundry Service'}
          projectDetail={`Introducing a sleek and user-friendly laundry service website designed from scratch with HTML and Tailwind CSS. This project showcases my ability to create elegant, responsive web interfaces that enhance user experience and streamline service accessibility. Explore how I integrated intuitive design with efficient functionality to redefine the online laundry experience.`}
          linkUsed={'https://laudry-tau.vercel.app/index.html'}
          technology={'Html, Css, and Javascript.'}
          myStyle={styles.projectDetail_div}
          className={`${styles.projectDetail} ${section2InView ? `${styles.inView}` : ``}`} refer={section2Ref}
        />

        <ProjectDetail
          mainHeading={'Ongoing Project'}
          projectName={'Tic-Tac_Toe'}
          projectDetail={`In progress: Crafting a responsive Tic Tac Toe game with React.js and CSS. This project showcases my skills in front-end development, focusing on creating an interactive and user-friendly gaming experience. Stay tuned as I refine the gameplay mechanics and design to deliver a seamless and enjoyable gaming interface.`}
          linkUsed={'https://laudry'}
          technology={'React.js, CSS'}
          myStyle={styles.projectDetail_div_reverse}
          className={`${styles.projectDetail} ${section3InView ? `${styles.inView}` : ``}`} refer={section3Ref}
        />
      </main>
    </>
  );
}

export default Home;
