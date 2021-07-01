import React, { useState, useEffect } from 'react';
import { getAlumnos, delAlumno, getAlumnoId } from '../helpers/rutaAlumnos';
// import { Table } from 'react-bootstrap';
// import ModalAlumno from './ModalAlumno';
import '../css/tableAlumnos.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAddressCard, faTrash } from '@fortawesome/free-solid-svg-icons';

const TableAlumnos = () => {
  let id_alumno = '';

  const [alumnos, setAlumnos] = useState({
    data: {},
    loading: true,
  });

  const [alumno, setAlumno] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    consultaAlumnos();
  }, []);

  const consultaAlumnos = (desde) => {
    getAlumnos(desde).then((datos) => {
      setAlumnos({
        data: datos,
        loading: false,
      });
      console.log(datos);
    });
  };

  const handleClose = () => {
    setShow(false);
    consultaAlumnos();
  };

  const handleShow = () => setShow(true);

  const modificaAlumno = (id) => {
    id_alumno = id;

    getAlumnoId(id_alumno).then((resp) => {
      console.log(resp);
      setAlumno(resp);

      handleShow();
    });
  };

  const deleteAlumno = (id) => {
    let validar = window.confirm('Borrar alumno?');
    if (validar) {
      delAlumno(id).then((resp) => {
        consultaAlumnos();
      });
    }
  };

  return (
    <>
      <h1>Tabla</h1>
      {/* <div className="container mt-5">
        {!alumnos.loading && (
          <div className="row">
            <div className="col-12 mt-4">
              <Table striped bordered hover className="mt-2">
                <thead>
                  <tr className="tabla">
                    <th>Nº Expediente</th>
                    <th>Nombre y Apellido</th>
                    <th>Curso</th>
                    <th>Cuota</th>
                  </tr>
                </thead>
                <tbody>
                  {alumnos.data.alumnos.map((alumno) => (
                    <tr key={alumno._id}>
                      <td>{alumno.alumno.expediente}</td>
                      <td>{alumno.nombreCompleto}</td>
                      <td>{alumno.curso}</td>
                      <td>
                        <button className="btn btn-outline-dark mr-2">
                          <FontAwesomeIcon
                            icon={faAddressCard}
                            onClick={() => {
                              modificaAlumno(alumno._id);
                            }}
                          />
                        </button>
                        <button className="btn btn-outline-dark">
                          {' '}
                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => {
                              deleteAlumno(alumno._id);
                            }}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        )}

        <ModalAlumno
          show={show}
          handleClose={handleClose}
          alumno={alumno.alumno}
        /> */}
      {/* </div> */}
    </>
  );
};

export default TableAlumnos;
