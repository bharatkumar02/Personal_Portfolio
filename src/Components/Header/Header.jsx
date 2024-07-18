import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import './Header.css';

function Header() {
  const [styleHea, setStyleHea] = useState(false);

  function handelClick() {
    setStyleHea((pre) => !pre);
    // console.log(styleHea);
  }

  // useEffect(() => {
  //   console.log('styleHea changed:', styleHea);
  // }, [styleHea]);

  // console.log(styleHea);

  return (
    <header className="header">
      <nav className="header_nav">
        <div className="header_image">
          <img src={Logo} alt="Logo" />
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
            <li className="header_list--about">About</li>
            <li className="header_list--portfolio">Portfolio</li>
            <li className="header_list--contact">Contact</li>
          </ul>

          <ul className="header_list-2">
            <li className="header_list--facebook">Img</li>
            <li className="header_list--linkedin">Img</li>
            <li className="header_list--insta">Img</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
