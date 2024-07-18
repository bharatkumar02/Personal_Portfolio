import React from 'react';
import './Contact.css';
import contact from '../../assets/contact.png';
import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import phone from '../../assets/phone.svg';
import location from '../../assets/location.svg';
import email from '../../assets/email.svg';
import PersonalDetail from './Personal_Detail/PersonalDetail';

function Contact() {
  return (
    <>
      <main className="contact">
        <section className="contact_div">
          <div className="contact_image">
            <img src={contact} alt="Contact_Image" />
          </div>
          <div className="contact_detail">
            <h1>Contact</h1>
            <h3>Get in Touch!</h3>
            <ul>
              <li>
                <img src={linkedin} alt="Linkedin" />
                <p>LinkedIn</p>
              </li>
              <li>
                <img src={facebook} alt="Facebook" />
                <p>Facebook</p>
              </li>
              <li>
                <img src={instagram} alt="Instagram" />
                <p>Instagram</p>
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
