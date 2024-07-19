import React from 'react';
import Bharat_img from '../../assets/Bharat_img.png';
import './About.css';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Skill from '../../assets/Skills.png';
import SSITC from '../../assets/SSITC.png';
import Education from './Education/Education';

function About() {
  return (
    <main>
      <section className="about">
        <img src={Bharat_img} alt="Bharat_Image" />
        <div className="about_detail">
          <h1 className="about_heading">About Me</h1>
          <h3 className="about_punchline">
            Building interactive worlds that users love.
          </h3>
          <p className="about_parha">
            <span>Hello!</span> I'm <i>Bharat Kumar</i>, a dedicated frontend developer
            with a passion for creating seamless user experiences. With expertise in HTML,
            CSS, JavaScript, and modern frameworks like React, I transform design concepts
            into functional, engaging web applications.
          </p>
        </div>
      </section>
      <Experience
        heading={'Experience'}
        image={Skill}
        logo={SSITC}
        para1={'Front-end Developer Intern'}
        para2={'SSITC Solution Pvt. Ltd.'}
        para3={'February 1, 2024 - OnGoing'}
        list1="&#10148; Developed responsive web applications using HTML, CSS, Tailwind CSS, React.js, and JavaScript."
        list2="&#10148; Improved page load times by 30% and enhanced user engagement by
                  20%."
        list3="&#10148; Collaborated with teams to design user-friendly interfaces and
                  implement new features."
        btn={'Internship Letter'}
        altImage={'SSITC'}
      />
      <Skills />
      <Education />
    </main>
  );
}

export default About;
