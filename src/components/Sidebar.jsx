import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faCaretRight,
  faHome,
  faSignOutAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import jwt_decode from 'jwt-decode'; //Paquete para decodificar el Token

import '../css/sidebar.css';
import { getMaterias } from '../helpers/rutaMateria';
import ModalSignout from './ModalSignout';

const Sidebar = () => {
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState('');
  const [payload, setPayload] = useState({
    role: '',
  });

  const [materias, setMaterias] = useState({
    data: {},
    loading: true,
  });
  const ActualizarData = () => {
    getMaterias().then((datos) => {
      setMaterias({
        data: datos,
        loading: false,
      });
    });
  };

  //Manejo el deslogueo de la web
  const handleLogin = () => {
    localStorage.setItem('token', JSON.stringify(''));
    localStorage.setItem('id', JSON.stringify(''));
    localStorage.setItem('usuario', JSON.stringify(''));
    setUser(JSON.parse(localStorage.getItem('nombre')));
    setPayload({ role: '' });
    history.push('/');
  };

  const checkToken = () => {
    let token = JSON.parse(localStorage.getItem('token')) || '';
    if (token.length > 0) {
      let token_decode = jwt_decode(localStorage.getItem('token')); //Obteniendo los datos del payload
      setPayload(token_decode.usuario);
    }
  };

  //Si cambia la locación asigno a user el valor de localstorage
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('usuario')) || '');
    ActualizarData();
    checkToken();
  }, [location]);

  useEffect(() => {
    ActualizarData();
  }, []);

  const [toggle, setToggle] = useState(false);
  const showSidebar = () => setToggle(!toggle);

  const [openModalSignout, setOpenModalSignout] = useState(false);
  const toggleSignout = () => setOpenModalSignout(!openModalSignout);

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
                <div className="item-link" onClick={toggleSignout}>
                  <ModalSignout
                    openModalSignout={openModalSignout}
                    toggleSignout={toggleSignout}
                  />
                  Cerrar Sesión
                </div>
                <span>
                  {payload.role === 'ADMIN_ROLE' && (
                    <Link
                      to="/admin"
                      className="text-decoration-none text-muted mr-2"
                    >
                      Administrador
                    </Link>
                  )}
                  <button
                    className="btn btn-outline-info"
                    onClick={handleLogin}
                  >
                    {user}
                  </button>
                </span>
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
