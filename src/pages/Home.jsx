import React from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../css/home.css';
import Cookies from '../components/Cookies';
import MostrarCookies from '../components/Cookies';

const Home = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="home-container">
        <div className="row">
          <div className="col">
            <div className="img-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="user-info">
              <ul className="info-list">
                <li className="info-item">NOMBRE</li>
                <li className="info-item">APELLIDO</li>
                <li className="info-item">FECHA INGRESO</li>
                <li className="info-item">CONTACTO</li>
              </ul>
              <ul className="info-list">
                <li className="info-item">ID</li>
                <li className="info-item">NOMBRE INSTITUCION</li>
                <li className="info-item">CONTACTO INSTITUCION</li>
                <li className="info-item">DIRECCION</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Cookies />
      <Footer />
    </>
  );
};

export default Home;
