import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import '../css/footer.css';

const Footer = () => {
  const [integrantes, setIntegrantes] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://my-json-server.typicode.com/rafalobop/proyectofinalrolling-frontend/integrantes'
      )
      .then((res) => {
        setIntegrantes(res.data);
      });
  }, []);

  return (
    <>
      <div className="footer">
        <div id="button"></div>
        <div id="container">
          <div id="cont">
            <div className="footer_center">
              <h3>Nuestro Equipo</h3>
            </div>
            <div className="team_container">
              <div className="cards_container">
                {integrantes.map((datos) => {
                  return <Card datos={datos} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
