import React from 'react'
import Bharat_img from '../../assets/Bharat_img.png';
import './About.css'

function About() {
  return (
    <main>
      <section className="about">
          <img src={Bharat_img} alt="Bharat_Image" />
          <div className="about_detail">
            <h1 className="about_heading">Welcome to my portfolio !</h1>
            <h3 className="about_punchline">
              Building Responsive and Interactive Web Interfaces with Precision
            </h3>
            <p className="about_parha">
              I'm{' '}
              <span className="about_myName">
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
    </main>
  )
}

export default About
