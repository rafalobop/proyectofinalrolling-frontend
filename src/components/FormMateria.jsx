import React, { useState, useEffect } from 'react';
import {
  getMateriaId,
  getMaterias,
  modifMateria,
} from '../helpers/rutaMateria';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ModalMateria from './ModalMateria';
const FormMateria = ({ materia }) => {
  const modificaMateria = (id) => {
    id_materia = id;
    getMateriaId(id_materia).then((resp) => {
      setMateriaSeleccionada(resp);
      handleShow();
    });
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);
  const [materiaSeleccionada, setMateriaSeleccionada] = useState({});
  const [show, setShow] = useState(false);

  let id_materia = '';
  // const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonEnabled(true);
    modifMateria(materia._id).then((respuesta) => {
      console.log(respuesta);
    });
  };

  const [buttonEnabled, setButtonEnabled] = useState(true);

  const [materiaSelect, setMateriaSelect] = useState({});

  // // console.log(formValues);
  const [allMaterias, setAllMaterias] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    consultaMaterias();
  }, []);

  const consultaMaterias = (desde) => {
    getMaterias(desde).then((datos) => {
      setAllMaterias({
        data: datos,
        loading: false,
      });
    });
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
          <button className="btn-eliminar-materia">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <ModalMateria
        materiaSeleccionada={materiaSeleccionada}
        show={show}
        handleClose={handleClose}
        // modificaMateria={modificaMateria}
      />
    </>
  );
};

export default FormMateria;
