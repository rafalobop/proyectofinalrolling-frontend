import React, { useState } from 'react';
import TableAlumnos from '../components/TableAlumnos';
import AddAlumno from '../components/AddAlumno';
import Layout from '../components/Layout';
import '../css/alumnos.css';
const Alumnos = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Layout />
      <div className="home-container">
        <div className="row">
          <div className="col color-titulo">
            <h1>Lista de Alumnos</h1>
            <hr />

            <AddAlumno setShow={setShow} show={show} />
            {show === false && <TableAlumnos />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alumnos;
