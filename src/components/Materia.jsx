import React, { useState, useEffect } from 'react';
import '../css/materia.css';
import { getMateriaId } from '../helpers/rutaMateria';
import { useParams } from 'react-router';
import Layout from './Layout';
import FormMateria from './FormMateria';

const Materia = () => {
  const [materia, setMateria] = useState({});

  let { id } = useParams();

  useEffect(() => {
    getMateriaId(id).then((datos) => {
      setMateria(datos.materia);
    });
  }, [id]);

  return (
    <>
      <Layout />
      <div className="home-container">
        <FormMateria materia={materia} />
      </div>
    </>
  );
};

export default Materia;
