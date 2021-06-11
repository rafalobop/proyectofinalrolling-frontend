import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faCaretRight,
  faHome,
  faSignOutAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import '../css/sidebar.css';

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const showSidebar = () => setToggle(!toggle);

  return (
    <>
      <div className="sidebar">
        <div className={toggle ? 'list-container show' : 'list-container'}>
          <ul className="sidebar-list">
            <li className="list-item">
              <div className="item-container">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faHome} />
                </div>
                <div className="item-link">
                  <Link to="/home">Inicio</Link>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="item-container">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className="item-link">
                  <Link to="/alumnos">Alumnos</Link>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="item-container">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faBook} />
                </div>
                <div className="item-link">
                  <Link to="/materias">Materias</Link>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="item-container">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </div>
                <div className="item-link">
                  <Link to="/">Cerrar Sesión</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="sidebar-toggle my-auto">
          <div className="toggle-container">
            <FontAwesomeIcon
              icon={faCaretRight}
              className="toggle-icon"
              onClick={showSidebar}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
