import React from 'react';
import './Home.css';
import Bharat_img from '../../assets/Bharat_img.png';
import ProjectDetail from './Home_project/ProjectDetail';
import styles from './Home_project/ProjectDetail.module.css';

function Home() {
  return (
    <>
      <main>
        <section className="home">
          <img src={Bharat_img} alt="Bharat_Image" />
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
          projectDetail={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, animi totam
              aliquid deleniti distinctio tempora ipsa mollitia incidunt placeat iste
              earum voluptates architecto voluptate officiis enim iure quam, aspernatur
              voluptatum. Praesentium, labore ipsum harum neque voluptatum cupiditate rem
              dolor ullam blanditiis delectus voluptates ipsa aspernatur repudiandae alias
              eveniet placeat consectetur?`}
          linkUsed={'https://laudry-tau.vercel.app/index.html'}
          technology={'Html, Css, and Javascript.'}
          myStyle={styles.projectDetail_div}
        />

        <ProjectDetail
          mainHeading={'Ongoing Project'}
          projectName={'Laundry Service'}
          projectDetail={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, animi totam
          aliquid deleniti distinctio tempora ipsa mollitia incidunt placeat iste
          earum voluptates architecto voluptate officiis enim iure quam, aspernatur
          voluptatum. Praesentium, labore ipsum harum neque voluptatum cupiditate rem
          dolor ullam blanditiis delectus voluptates ipsa aspernatur repudiandae alias
          eveniet placeat consectetur?`}
          linkUsed={'https://laudry-tau.vercel.app/index.html'}
          technology={'Html, Css, and Javascript.'}
          myStyle={styles.projectDetail_div_reverse}
        />
      </main>
    </>
  );
}

export default Home;
