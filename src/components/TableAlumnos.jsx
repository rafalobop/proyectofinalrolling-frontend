import React, { useState, useEffect } from 'react';
import { getAlumnos, delAlumno, getAlumnoId } from '../helpers/rutaAlumnos';
import { Table } from 'react-bootstrap';
import ModalAlumno from './ModalAlumno';
import '../css/tableAlumnos.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';

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
      // console.log(`alumns`, alumnos.data.alumno);
    });
  };

  const handleClose = () => {
    setShow(false);
    swal('Listo!', 'Alumno modificado', 'success');
    consultaAlumnos();
  };

  const handleShow = () => {
    setShow(true);
  };

  const modificaAlumno = (id) => {
    id_alumno = id;

    getAlumnoId(id_alumno).then((resp) => {
      // console.log(resp);
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
    swal('Listo!', 'Alumno eliminado', 'warning');
  };
  // console.log(alumnos.data.alumno);
  return (
    <>
      <div className="container mt-5">
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
                  {alumnos.data.alumno.map((alumno) => (
                    <tr key={alumno._id}>
                      <td>{alumno.expediente}</td>
                      <Link
                        to={`/alumnos/${alumno._id}`}
                        className="link-alumno"
                      >
                        <td>{alumno.nombreCompleto}</td>
                      </Link>
                      <td>{alumno.year}</td>
                      <td>
                        <button className="btn btn-outline-dark mr-2">
                          <FontAwesomeIcon
                            icon={faEdit}
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
        />
      </div>
    </>
  );
};

export default TableAlumnos;
