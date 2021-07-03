import React, { useState, useEffect } from 'react';
import '../css/materia.css';

import { useParams } from 'react-router';
import Layout from './Layout';
import { getMateriaId } from '../helpers/rutaMateria';

const Materia = () => {
  const [materia, setMateria] = useState({});
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
      <h2>{materia.nombreMateria}</h2>
      {/* <p>{materia.detalle}</p> */}
    </>
  );
};

export default Materia;
