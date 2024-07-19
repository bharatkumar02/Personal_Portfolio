import React from 'react';
import './Contact.css';
import contact2 from '../../assets/contact2.png';
import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import PersonalDetail from './Personal_Detail/PersonalDetail';
import { useInView } from 'react-intersection-observer';


function Contact() {
  const { ref: section1Ref, inView: section1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <main className="contact">
        <section className={`contact_div ${section1InView ? 'in-view' : ''}`} ref={section1Ref}>
          <div className="contact_image">
            <img src={contact2} alt="Contact_Image" loading='lazy'/>
          </div>
          <div className="contact_detail">
            <h1>Contact</h1>
            <h3>Get in Touch!</h3>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/bharat-kumar-4411642b2/"
                  target="_blank"
                >
                  <img src={linkedin} alt="Linkedin" loading='lazy'/>
                  <p>LinkedIn</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={facebook} alt="Facebook" loading='lazy'/>
                  <p>Facebook</p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bhkumar9995/?next=%2F&hl=en"
                  target="_blank"
                >
                  <img src={instagram} alt="Instagram" loading='lazy'/>
                  <p>Instagram</p>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <PersonalDetail />
      </main>
    </>
  );
}

export default Contact;
