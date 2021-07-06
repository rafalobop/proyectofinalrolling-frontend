import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ModalMateria from './ModalMateria';
import { getMateriaId, getMaterias } from '../helpers/rutaMateria';

const FormMateria = ({ materia }) => {
  // console.log(materia);
  let id_materia = '';
  const handleShow = () => setShow(true);
  const [materiaSeleccionada, setMateriaSeleccionada] = useState({});
  const [seleccion, setSeleccion] = useState(false);
  const [show, setShow] = useState(false);
  // const [allMaterias, setAllMaterias] = useState({
  //   data: {},
  //   loading: true,
  // });
  // console.log(materiaSeleccionada);
  // console.log();

  const modificaMateria = (id) => {
    id_materia = id;
    getMateriaId(id_materia).then((resp) => {
      if (!seleccion) {
        setSeleccion(false);
        console.log(seleccion);
      } else {
        setSeleccion(true);
        console.log(seleccion);
      }
      if (seleccion) {
        setMateriaSeleccionada(null);
        console.log(materiaSeleccionada, seleccion);
      } else {
        setMateriaSeleccionada(resp);
        console.log(materiaSeleccionada, seleccion);
      }

      handleShow();
    });
  };
  const handleClose = () => {
    setShow(false);
    setSeleccion(false);
  };

  // const consultaMaterias = () => {
  //   getMaterias().then((datos) => {
  //     setAllMaterias({
  //       data: datos,
  //       loading: false,
  //     });
  //   });
  // };

  // useEffect(() => {
  //   consultaMaterias();
  // }, []);

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
        show={show}
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
