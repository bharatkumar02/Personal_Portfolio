import React from 'react';
import education from '../../../assets/Education.png';
import logo from '../../../assets/igu.png';
import './Education.css';
import { useInView } from 'react-intersection-observer';

function Education() {

  const { ref: section1Ref, inView: section1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section className={`education ${section1InView ? 'in-view' : ''}`} ref={section1Ref}>
        <h1>Education</h1>
        <div className="education_div">
          <div className="education_image">
            <img src={education} alt="My Education" loading='lazy'/>
          </div>

          <div className="education_detail">
            <div className="logo">
              <img src={logo} alt="IGU_logo" loading='lazy'/>
            </div>
            <ul>
              <li>
                &#10148;{' '}
                <strong>Bachelor of Technology (B.Tech) in Computer Science</strong>
              </li>
              <li>
                &#10148; <strong>Institute</strong> Indira Gandhi University(IGU), Meerpur
              </li>
              <li>
                &#10148; <strong>Duration</strong> 2020 - 2024
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
