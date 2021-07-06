import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMaterias } from '../helpers/rutaMateria';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import '../css/materiaspage.css';

const MateriasPage = () => {
  const [materias, setMaterias] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    consultarMaterias();
  }, []);

  const consultarMaterias = () => {
    getMaterias().then((materia) => {
      setMaterias({
        data: materia,
        loading: false,
      });
    });
  };

  return (
    <>
      <Layout />
      <div className="home-container">
        <div className="cards_items_container">
          {materias.data.map((materia) => (
            <Link key={materia._id} to={`/materias/${materia._id}`}>
              <div className="materias_card">
                <div className="materias_card-header">
                  <img src={materia.imagen} alt={materia.nombreMateria} />
                </div>
                <div className="materias_card-text">
                  <p>{materia.nombreMateria}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MateriasPage;
