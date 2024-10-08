import React from 'react';
import './PersonalDetail.css';
import email from '../../../assets/email.svg';
import phone from '../../../assets/phone.svg';
import location from '../../../assets/location.svg';
import { useInView } from 'react-intersection-observer';


function PersonalDetail() {

  const { ref: section2Ref, inView: section2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <section className={`personalDetail ${section2InView ? 'in-view' : ''}`} ref={section2Ref}>
        <ul>
          <li>
            <div className="personalDetail_image">
              <img src={phone} alt="Phone_Number" />
            </div>
            <div className="personalDetail_detail">
              <h3>Contact Number</h3>
              <p>+91 8397826133</p>
            </div>
          </li>
          <li>
            <div className="personalDetail_image">
              <img src={location} alt="My Address" />
            </div>
            <div className="personalDetail_detail">
              <h3>My Location</h3>
              <p>Dharuhera (Rewari)</p>
            </div>
          </li>
          <li>
            <div className="personalDetail_image">
              <img src={email} alt="Email" />
            </div>
            <div className="personalDetail_detail">
              <h3>Email</h3>
              <p>kumarbharat9416@gmail.com</p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default PersonalDetail;
