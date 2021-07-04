import React, { useState, useEffect } from 'react';
import { getMateriaId } from '../helpers/rutaMateria';

const FormMateria = ({ materia }) => {
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [materiaSelec, setMateriaSelec] = useState({});
  const [formValues, setFormValues] = useState({
    nombreMateria: materia.nombreMateria,
    imagen: materia.imagen,
    detalle: materia.detalle,
    // usuario: id,
  });
  let id_materia = '';

  const modificaMateria = (id) => {
    id_materia = id;

    getMateriaId(id_materia).then((resp) => {
      console.log(resp);
      // setCurso(resp);
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
        <div className="materia-form">
          <form>
            <label>Nombre</label>
            <input type="text" disabled={buttonEnabled} />
            <label>Detalle</label>
            <input type="text" disabled={buttonEnabled} />
          </form>
        </div>
        <div className="materia-buttons">
          <button
            className="btn-materia-form"
            onClick={() => {
              modificaMateria(id_materia);
            }}
          >
            Modificar
          </button>
          <button className="btn-materia-form" disabled={buttonEnabled}>
            Guardar
          </button>
          <button className="btn-materia-form">Eliminar</button>
        </div>
      </div>
    </>
  );
};

export default FormMateria;
