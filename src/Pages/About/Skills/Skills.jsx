import React from 'react';
import './Skills.css';
import html from '../../../assets/html.svg';
import css3 from '../../../assets/css3.svg';
import Tailwind_CSS from '../../../assets/Tailwind_CSS.svg';
import Sass from '../../../assets/Sass.svg';
import javascript from '../../../assets/javascript.svg';
import react from '../../../assets/react.svg';
import reactRouter from '../../../assets/reactRouter.svg';
import redux from '../../../assets/redux.svg';
import vscode from '../../../assets/vscode.svg';
import github from '../../../assets/github.svg';

function Skills() {
  return (
    <>
      <section className="skill">
        <h1 className='skill_h1'>Technical Skills</h1>
        <div className='skill_div'>
        <div className="skill_FrontEnd">
          <h3>FrontEnd Development</h3>
          <div className='skill_FrontEnd_image'>
          <div className="skill_image">
            <img src={html} alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="skill_image">
            <img src={css3} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="skill_image">
            <img src={Tailwind_CSS} alt="Tailwind_CSS" />
            <p>Tailwind CSS</p>
          </div>
          <div className="skill_image">
            <img src={Sass} alt="Sass" />
            <p>SASS</p>
          </div>
          <div className="skill_image">
            <img src={javascript} alt="javascript" />
            <p>Javascript</p>
          </div>
          <div className="skill_image">
            <img src={react} alt="react" />
            <p>React.js</p>
          </div>
          <div className="skill_image">
            <img src={reactRouter} alt="reactRouter" />
            <p>React Routers</p>
          </div>
          <div className="skill_image">
            <img src={redux} alt="redux" />
            <p>Redux</p>
          </div>
          </div>
          
        </div>

        <div className="skill_tools">
          <h3>Tools & Platform</h3>
          <div className='skill_tools_image'>
          <div className="skill_image">
            <img src={vscode} alt="vscode" />
            <p>VSCode</p>
          </div>
          <div className="skill_image">
            <img src={github} alt="github" />
            <p>GitHub</p>
          </div>
          </div>
        </div>
        </div>
        
      </section>
    </>
  );
}

export default Skills;
