import React, { useState, useEffect } from 'react';
import '../css/footer.css';
import '../css/card.css';
import axios from 'axios';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import react from '../images/react.png';
import bootstrap from '../images/bootstrap.png';
import mongo from '../images/mongo.png';
import git from '../images/git.png';
import node from '../images/node.png';

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
                  return (
                    <div className="card" key={datos.id}>
                      <div className="face back">
                        <div className="card-back-container">
                          <div className="technologies">
                            <div className="tech">
                              <img src={html} alt="html" />
                            </div>
                            <div className="tech">
                              <img src={css} alt="css" />
                            </div>
                            <div className="tech">
                              <img src={js} alt="javascript" />
                            </div>
                            <div className="tech">
                              <img src={git} alt="git" />
                            </div>
                            <div className="tech">
                              <img src={bootstrap} alt="bootstrap" />
                            </div>
                            <div className="tech">
                              <img src={react} alt="react" />
                            </div>
                            <div className="tech">
                              <img src={node} alt="node" />
                            </div>
                            <div className="tech">
                              <img src={mongo} alt="mongo" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="face front">
                        <div className="card-front-container">
                          <div className="card-header">
                            <div className="card-title">
                              <h3>{datos.name}</h3>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="img-container">
                              <img
                                src={datos.imagen}
                                alt={datos.name}
                                className="card-img"
                              />
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="tech-info">
                              <p className="tech-info-title">
                                Full Stack <br />
                                Developer
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
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
