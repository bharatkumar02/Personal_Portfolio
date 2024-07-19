import React from 'react';
import './Contact.css';
import contact2 from '../../assets/contact2.png';
import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import PersonalDetail from './Personal_Detail/PersonalDetail';

function Contact() {
  return (
    <>
      <main className="contact">
        <section className="contact_div">
          <div className="contact_image">
            <img src={contact2} alt="Contact_Image" />
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
                  <img src={linkedin} alt="Linkedin" />
                  <p>LinkedIn</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={facebook} alt="Facebook" />
                  <p>Facebook</p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bhkumar9995/?next=%2F&hl=en"
                  target="_blank"
                >
                  <img src={instagram} alt="Instagram" />
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
