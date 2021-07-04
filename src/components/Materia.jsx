import React, { useState, useEffect } from 'react';
import '../css/materia.css';

import { useParams } from 'react-router';
import Layout from './Layout';
import { getMateriaId } from '../helpers/rutaMateria';

const Materia = () => {
  const [materia, setMateria] = useState({});
  const [buttonEnabled, setButtonEnabled] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    getMateriaId(id).then((datos) => {
      setMateria(datos.materia);
    });
  }, [id]);
  console.log(materia);

  return (
    <>
      <Layout />
      <div className="home-container">
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
            <button className="btn-materia-form">Modificar</button>
            <button className="btn-materia-form" disabled={buttonEnabled}>
              Guardar
            </button>
            <button className="btn-materia-form">Eliminar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Materia;
