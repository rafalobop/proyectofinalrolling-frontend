import React, { useState, useEffect } from 'react';
import TableMaterias from '../components/TableMaterias';
import AddMateria from '../components/AddMateria';
import Layout from '../components/Layout';
import { getMaterias } from '../helpers/rutaAlumnoss';
import '../css/alumnos.css';
const Materias = () => {
  const [show, setShow] = useState(false);
  const [materias, setMaterias] = useState({
    data: {},
    loading: true,
  });

  const consultaMaterias = () => {
    getMaterias().then((datos) => {
      setMaterias({
        data: datos,
        loading: false,
      });
    });
  };

  useEffect(() => {
    consultaMaterias();
  }, []);

  return (
    <>
      <Layout />
      <div className="home-container mt-2">
        <div className="row">
          <div className="col color-titulo">
            <h1>Notas</h1>
            <hr />
           

            <AddMateria
              setShow={setShow}
              show={show}
              setMaterias={setMaterias}
              materias={materias}
            />
            {show === false && (
              <TableMaterias
              materias={materias}
                setMaterias={setMaterias}
                consultaMaterias={consultaMaterias}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Materias;
