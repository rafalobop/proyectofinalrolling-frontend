import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import ModalFaq from './ModalFaq';
import ModalSettings from './ModalSettings';
import ModalSignout from './ModalSignout';
import '../css/navbar.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../themes/themes';

const Navbarstyled = styled.nav`
  background-color: ${(props) => props.theme.nav};
  /* color: ${(props) => props.theme.fontColor}; */
`;

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);

  const [openModalSettings, setOpenModalSettings] = useState(false);
  const toggleSettings = () => setOpenModalSettings(!openModalSettings);

  const [openModalSignout, setOpenModalSignout] = useState(false);
  const toggleSignout = () => setOpenModalSignout(!openModalSignout);

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Navbarstyled className="navbar navbar-expand-lg navbar-container">
          <Link className="navbar-brand" to="/home">
            <img src={logo2} alt="logo" className="navbar-img" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  <FontAwesomeIcon
                    icon={faTools}
                    className="nav-icon"
                    onClick={toggleSettings}
                  />
                  <ModalSettings
                    openModalSettings={openModalSettings}
                    toggleSettings={toggleSettings}
                    theme={theme}
                    setTheme={setTheme}
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="nav-icon"
                    onClick={toggle}
                  />
                  <ModalFaq openModal={openModal} toggle={toggle} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className="nav-icon"
                    onClick={toggleSignout}
                  />
                  <ModalSignout
                    openModalSignout={openModalSignout}
                    toggleSignout={toggleSignout}
                  />
                </a>
              </li>
            </ul>
          </div>
        </Navbarstyled>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
