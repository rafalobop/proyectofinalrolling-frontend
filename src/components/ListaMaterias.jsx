import React, { useState, useEffect } from 'react';
import '../css/listamaterias.css';
import MateriasPage from '../pages/MateriasPage';
import ModalMateria from './ModalMateria';

const ListaMaterias = ({ materias }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);
  const [materia, setMateria] = useState(false);

  const verMateria = () => {
    if (!materia) {
      setMateria(true);
      toggle();
    } else {
      setMateria(false);
    }
  };

  // useEffect(() => {
  //   verMateria();
  // }, []);
  // console.log(materias);
  return (
    <>
      <div className="cards_container">
        {materias.data.map((materia) => (
          <div key={materia._id} className="materias_card" onClick={verMateria}>
            <div className="materias_card-header">
              <img src={materia.imagen} alt={materia.nombreMateria} />
            </div>
            <div className="materias_card-text">
              <p>{materia.nombreMateria}</p>
            </div>
          </div>
        ))}
      </div>
      <ModalMateria
        toggle={toggle}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default ListaMaterias;
