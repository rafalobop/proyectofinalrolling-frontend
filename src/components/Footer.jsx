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
        <span className="footer-btn" id="button">
          0
        </span>
        <div id="container">
          <div id="cont">
            <div className="footer_center">
              <h3 className="footer-title">Nuestro Equipo</h3>
            </div>
            <div className="team_container">
              <div className="cards_footer_container">
                {integrantes.map((datos) => {
                  return <Card key={Math.random()} datos={datos} />;
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
