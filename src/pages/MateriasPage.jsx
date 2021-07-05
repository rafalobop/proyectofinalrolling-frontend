import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMaterias, getMateriaId } from '../helpers/rutaMateria';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalMateria from '../components/ModalMateria';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import '../css/materiaspage.css';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

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
  // const modificaMateria = (id) => {
  //   id_materia = id;
  //   // setButtonEnabled(false);
  //   getMateriaId(id_materia).then((resp) => {
  //     setMateriaSeleccionada(resp);
  //     handleShow();
  //   });
  // };

  // const borraMateria = (id) => {
  //   let validar = window.confirm('está seguro que desea borrar el curso?');
  //   if (validar) {
  //     delMateria(id).then((resp) => {
  //       consultarMaterias();
  //     });
  //   }
  // };
  return (
    <>
      <Layout />
      <div className="home-container">
        <div className="cards_items_container">
          {materias.data.map((materia) => (
            <Link to={`/materias/${materia._id}`}>
              <div key={materia._id} className="materias_card">
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
