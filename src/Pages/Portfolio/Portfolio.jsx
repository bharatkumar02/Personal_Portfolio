import React from 'react';
import './Portfolio.css';
import portfolio from '../../assets/portfolio.jpg';
import MyProject from './MyProjects/MyProject';
import styles from '../Portfolio/MyProjects/MyProject.module.css';

function Portfolio() {
  return (
    <>
      <main>
        <section className="portfolio">
          <img src={portfolio} alt="Project_Image" />
          <div className="portfolio_detail">
            <h1 className="portfolio_heading">My Work</h1>
            <h3 className="portfolio_punchline">
              Experience my latest front-end breakthroughs
            </h3>
            <p className="portfolio_parha">
              Welcome to my portfolio. Here you can find a selection of my recent
              front-end development projects. Each project showcases my skills in HTML,
              CSS, JavaScript, and various frameworks and libraries.
            </p>
          </div>
        </section>
        <MyProject
          projectName={'Laundry Service'}
          projectDetail={`Introducing a sleek and user-friendly laundry service website designed from scratch with HTML and Tailwind CSS. This project showcases my ability to create elegant, responsive web interfaces that enhance user experience and streamline service accessibility. Explore how I integrated intuitive design with efficient functionality to redefine the online laundry experience.`}
          linkUsed={'https://laudry-tau.vercel.app/index.html'}
          technology={'Html, Tailwind, Javascript.'}
          myStyle={styles.projectDetail_div}
          gitLink={'https://github.com/bharatkumar02/Safety-Instructions'}
        />
      </main>
    </>
  );
}

export default Portfolio;
