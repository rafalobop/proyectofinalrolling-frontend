import React, { useState, useEffect } from 'react';
import '../css/materiaspage.css';
import { getMaterias } from '../helpers/rutaMateria';
import Footer from '../components/Footer';

import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const MateriasPage = () => {
  const [materias, setMaterias] = useState({
    data: [],
    loading: true,
  });
  const [materiaSeleccionada, setMateriaSeleccionada] = useState({});
  useEffect(() => {
    getMaterias().then((materia) => {
      setMaterias({
        data: materia,
        loading: false,
      });
    });
  }, []);
  // const seleccionarMateria = (materia) => {
  //   const seleccion = materias.data.find((mat) => {
  //     return mat._id === materia._id;
  //   });
  //   console.log(seleccion);
  //   if (materiaSeleccionada === {}) {
  //     setMateriaSeleccionada(seleccion);
  //     // console.log(materiaSeleccionada);
  //   } else {
  //     setMateriaSeleccionada({});
  //   }
  // };

  return (
    <>
      <Layout />
      <div className="home-container">
        {/* <ListaMaterias materias={materias} /> */}
        <div className="cards_items_container">
          {materias.data.map((materia) => (
            <div
              key={materia._id}
              className="materias_card"
              // onClick={() => seleccionarMateria(materia)}
            >
              <Link to={`/materias/${materia._id}`}>
                <div className="materias_card-header">
                  <img src={materia.imagen} alt={materia.nombreMateria} />
                </div>
                <div className="materias_card-text">
                  <p>{materia.nombreMateria}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MateriasPage;
