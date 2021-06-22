import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../css/home.css';
import Cookies from '../components/Cookies';

const Home = () => {
  const [usuarioLogeado, setUsuarioLogeado] = useState({
    nombre: '',
    apellido: '',
    fechaIngreso: '',
    contacto: '',
    id: '',
    nombreInst: '',
    contactoInst: '',
    direccion: '',
  });
  useEffect(() => {
    setUsuarioLogeado({
      nombre: JSON.parse(localStorage.getItem('nombre')),
      apellido: JSON.parse(localStorage.getItem('apellido')),
      fechaIngreso: JSON.parse(localStorage.getItem('fechaIngreso')),
      contacto: JSON.parse(localStorage.getItem('contacto')),
      id: JSON.parse(localStorage.getItem('id')),
      nombreInst: JSON.parse(localStorage.getItem('nombreInstit')),
      contactoInst: JSON.parse(localStorage.getItem('contactoInstit')),
      direccion: JSON.parse(localStorage.getItem('direccion')),
    });
  }, []);

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
                <li className="info-item">Nombre: {usuarioLogeado.nombre}</li>
                <li className="info-item">
                  Apellido: {usuarioLogeado.apellido}
                </li>
                <li className="info-item">
                  Fecha de Ingreso: {usuarioLogeado.fechaIngreso}
                </li>
                <li className="info-item">
                  Contacto: {usuarioLogeado.contacto}
                </li>
              </ul>
              <ul className="info-list">
                <li className="info-item">Expediente: {usuarioLogeado.id}</li>
                <li className="info-item">
                  Nombre Institucion: {usuarioLogeado.nombreInstit}
                </li>
                <li className="info-item">
                  Contacto Institucion: {usuarioLogeado.contactoInst}
                </li>
                <li className="info-item">
                  Direccion: {usuarioLogeado.direccion}
                </li>
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
