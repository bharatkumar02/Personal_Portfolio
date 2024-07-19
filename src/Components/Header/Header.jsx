import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import './Header.css';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import { Link } from 'react-router-dom';


function Header() {
  const [styleHea, setStyleHea] = useState(false);

  function handelClick() {
    setStyleHea((pre) => !pre);
  }

  return (
    <header className="header">
      <nav className="header_nav">
        <div className="header_image">
          <Link to='/'>
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
            <li className="header_list--about"><Link to="/about">About</Link></li>
            <li className="header_list--portfolio"><Link to="/portfolio">Portfolio</Link></li>
            <li className="header_list--contact"><Link to="/contact">Contact</Link></li>
          </ul>

          <ul className="header_list-2">
            <li>
              <Link to="https://www.linkedin.com/in/bharat-kumar-4411642b2/" target='_blank'>
                <img src={linkedin} alt="LinkedIn" />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/bharatkumar02" target='_blank'>
                <img src={github} alt="Github" />
              </Link>
            </li>
            <li>
              <Link to="https://www..instagram.com/bhkumar9995/?next=%2F&hl=en" target='_blank'>
                <img src={instagram} alt="Instagram" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
