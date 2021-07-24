import React, { useState, useEffect } from 'react';
import TableAlumnos from '../components/TableAlumnos';
import AddAlumno from '../components/AddAlumno';
import Layout from '../components/Layout';
import { getAlumnos } from '../helpers/rutaAlumnos';
import '../css/alumnos.css';
const Alumnos = () => {
  const [show, setShow] = useState(false);
  const [alumnos, setAlumnos] = useState({
    data: {},
    loading: true,
  });

  const consultaAlumnos = () => {
    getAlumnos().then((datos) => {
      setAlumnos({
        data: datos,
        loading: false,
      });
    });
  };

  useEffect(() => {
    consultaAlumnos();
  }, []);

  return (
    <>
      <Layout />
      <div className="home-container">
        <div className="row">
          <div className="col color-titulo">
            <h1>Lista de Alumnos</h1>
            <hr />

            <AddAlumno
              setShow={setShow}
              show={show}
              setAlumnos={setAlumnos}
              alumnos={alumnos}
            />
            {show === false && (
              <TableAlumnos
                alumnos={alumnos}
                setAlumnos={setAlumnos}
                consultaAlumnos={consultaAlumnos}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alumnos;
