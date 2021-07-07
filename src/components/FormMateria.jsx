import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import ModalMateria from './ModalMateria';
import { getMateriaId } from '../helpers/rutaMateria';

const FormMateria = ({ materia, setMateria }) => {
  let id_materia = '';
  const handleShow = () => setShow(true);
  const [materiaSeleccionada, setMateriaSeleccionada] = useState({});
  const [seleccion, setSeleccion] = useState(false);
  const [show, setShow] = useState(false);

  const modificaMateria = (id) => {
    id_materia = id;
    getMateriaId(id_materia).then((resp) => {
      if (!seleccion) {
        setSeleccion(false);
      } else {
        setSeleccion(true);
      }
      if (seleccion) {
        setMateriaSeleccionada(null);
      } else {
        setMateriaSeleccionada(resp);
      }

      handleShow();
    });
  };
  const handleClose = () => {
    setShow(false);
    setSeleccion(false);
  };

  return (
    <>
      <div className="top">
        <h2 className="materia-title">{materia.nombreMateria}</h2>
        <div className="form-img-container">
          <img
            className="form-img"
            src={materia.imagen}
            alt={materia.nombreMateria}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="materia-data">
          <p className="materia-detail">
            <span className="materia-tag">Nombre: </span>
            {materia.nombreMateria}
          </p>
          <p className="materia-detail">
            <span className="materia-tag">Detalle: </span>
            {materia.detalle}
          </p>
          <p className="materia-detail">
            <span className="materia-tag">Años: </span>
            1, 2, 3, 4
          </p>
        </div>
        <div className="materia-form-buttons">
          <button
            className="btn-modificar-materia"
            onClick={() => {
              modificaMateria(materia._id);
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      </div>
      <ModalMateria
        show={show}
        setMateria={setMateria}
        materia={materia}
        handleClose={handleClose}
        setSeleccion={setSeleccion}
        seleccion={seleccion}
        materiaSeleccionada={materiaSeleccionada}
        setMateriaSeleccionada={setMateriaSeleccionada}
      />
    </>
  );
};

export default FormMateria;
