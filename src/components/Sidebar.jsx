import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory, NavLink } from 'react-router-dom';
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
    localStorage.setItem('nombre', JSON.stringify(''));
    localStorage.setItem('apellido', JSON.stringify(''));
    localStorage.setItem('fechaIngreso', JSON.stringify(''));
    localStorage.setItem('contacto', JSON.stringify(''));
    localStorage.setItem('role', JSON.stringify(''));
    localStorage.setItem('id', JSON.stringify(''));
    localStorage.setItem('nombreInstit', JSON.stringify(''));
    localStorage.setItem('contactoInstit', JSON.stringify(''));
    localStorage.setItem('direccion', JSON.stringify(''));
    setUser(JSON.parse(localStorage.getItem('usuario')));
    setPayload({ role: '' });
    history.push('/');
  };

  const checkToken = () => {
    let token = JSON.parse(localStorage.getItem('token')) || '';
    if (token.length > 0) {
      let token_decode = jwt_decode(localStorage.getItem('token')); //Obteniendo los datos del payload
      setPayload(token_decode.usuario.role);
    }
    if (payload === 'ADMIN_ROLE') {
      console.log('eres administrador');
    }
  };

  //Si cambia la locaci??n asigno a user el valor de localstorage
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
      <div className="sidebar mt-1">
        <div className={toggle ? 'list-container show' : 'list-container'}>
          <ul className="sidebar-list">
            <li className="list-item">
              <NavLink to="/home" activeClassName="active">
                <div className="item-container">
                  <div className="item-icon">
                    <FontAwesomeIcon icon={faHome} />
                  </div>
                  <div className="item-link">Inicio</div>
                </div>
              </NavLink>
            </li>
            <li className="list-item">
              <Link to="/materias">
                <div className="item-container">
                  <div className="item-icon">
                    <FontAwesomeIcon icon={faBook} />
                  </div>
                  <div className="item-link">Materias</div>
                </div>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/alumnos">
                <div className="item-container">
                  <div className="item-icon">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <div className="item-link">Alumnos</div>
                </div>
              </Link>
            </li>
            <li className="list-item">
              <ModalSignout
                openModalSignout={openModalSignout}
                toggleSignout={toggleSignout}
                handleLogin={handleLogin}
              />
              <div className="item-container">
                <div className="item-icon">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </div>
                <div className="item-link" onClick={toggleSignout}>
                  Cerrar Sesi??n
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
