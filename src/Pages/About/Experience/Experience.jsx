import React from 'react';
import Skills from '../../../assets/Skills.png';
import SSITC from '../../../assets/SSITC.png';
import './Experience.css';
import { useInView } from 'react-intersection-observer';


function Experience({
  heading,
  para1,
  para2,
  para3,
  image,
  logo,
  list1,
  list2,
  list3,
  btn,
  altImage,
}) {
  const { ref: section1Ref, inView: section1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <section className={`experience ${section1InView ? 'in-view' : ''}`} ref={section1Ref}>
        <div className="experience_heading">
          <h1>{heading}</h1>
        </div>
        <div className="experience_div">
          <div className="experience_image">
            <img src={image} alt="Experience" loading='lazy'/>
          </div>
          <div className="experience_detail">
            <div className="company_logo">
              <img src={logo} alt={altImage} loading='lazy'/>
            </div>
            <div className="experience_parah">
              <p>
                <strong>{para1}</strong>
              </p>
              <p>
                <strong>{para2}</strong>
              </p>
              <p>
                <strong>{para3}</strong>
              </p>
            </div>
            <div className="experience_list">
              <ul>
                <li>{list1}</li>
                <li>{list2}</li>
                <li>{list3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
