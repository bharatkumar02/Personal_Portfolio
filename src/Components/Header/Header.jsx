import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import './Header.css';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';



function Header() {
  const [styleHea, setStyleHea] = useState(false);

  function handelClick() {
    setStyleHea((pre) => !pre);
  }

  const { ref: section1Ref, inView: section1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <header className={`header ${section1InView ? 'in-view' : ''}`} ref={section1Ref}>
      <nav className="header_nav">
        <div className="header_image">
          <Link to='/' smooth={true} duration={200}>
          <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="header_icon" onClick={handelClick}>
          <div className="header_label">
            <span
              style={
                styleHea ? { transform: 'rotate(45deg)', top: '0px', left: '5px' } : {}
              }
            ></span>
            <span style={styleHea ? { width: '0%', opacity: '0' } : {}}></span>
            <span
              style={
                styleHea ? { transform: 'rotate(-45deg)', top: '28px', left: '5px' } : {}
              }
            ></span>
          </div>
        </div>

        <div className="header_lists" style={{ left: styleHea ? '0' : '-100%' }}>
          <ul className="header_list-1">
            <li className="header_list--about" onClick={handelClick}><Link to="/about">About</Link></li>
            <li className="header_list--portfolio" onClick={handelClick}><Link to="/portfolio">Portfolio</Link></li>
            <li className="header_list--contact" onClick={handelClick}><Link to="/contact">Contact</Link></li>
          </ul>

          <ul className="header_list-2">
            <li>
              <Link to="https://www.linkedin.com/in/bharat-kumar-4411642b2/" target='_blank'>
                <img src={linkedin} alt="LinkedIn" loading='lazy'/>
              </Link>
            </li>
            <li>
              <Link to="https://github.com/bharatkumar02" target='_blank'>
                <img src={github} alt="Github" loading='lazy' />
              </Link>
            </li>
            <li>
              <Link to="https://www..instagram.com/bhkumar9995/?next=%2F&hl=en" target='_blank'>
                <img src={instagram} alt="Instagram" loading='lazy' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
