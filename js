import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import MetamaskButton from './MetamaskButton';
import Logo from '../images/logo.svg';
import ThemeSwitcher from "./ThemeSwitcher";


const Navigation = ({ theme, switchTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`navigation${isOpen ? ' open' : ''}`}>
        <img src={Logo} alt="logo" className="logo" />
        <ul>
          <li>
            <NavLink to="swap">Swap</NavLink>
          </li>
          <li>
            <NavLink to="/pool">Pool</NavLink>
          </li>
          <li>
            <NavLink to="/nfts">NFTs</NavLink>
          </li>
          <li>
            <NavLink to="/tools">Tools</NavLink>
          </li>
          </ul>
        <div className="extras-container"> {/* Ajoutez ce div */}
          <div className="metamask-container">
            <MetamaskButton />
          </div>
          <div className="theme-toggle">
  <ThemeSwitcher theme={theme} switchTheme={switchTheme} />
</div>
        </div>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default Navigation;
