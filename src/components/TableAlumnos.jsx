import React, { useState } from 'react';
import { delAlumno, getAlumnoId } from '../helpers/rutaAlumnos';
import { Table } from 'react-bootstrap';
import ModalAlumno from './ModalAlumno';
import '../css/tableAlumnos.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';

const TableAlumnos = ({ alumnos, setAlumnos, consultaAlumnos }) => {
  console.log(alumnos.data);
  let id_alumno = '';

  const [alumno, setAlumno] = useState({});
  const [show, setShow] = useState(false);

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
  return (
    <>
      <div className="container mt-5">
        {!alumnos.loading && (
          <div className="row">
            <div className="col-12 mt-4">
              <Table striped bordered hover responsive className="mt-2">
                <thead>
                  <tr className="tabla">
                    <th>Nº Expediente</th>
                    <th>Nombre y Apellido</th>
                    <th>Curso</th>
                    <th>Cuota</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {alumnos.data.map((alumno) => (
                    <tr key={alumno._id}>
                      <td>{alumno.expediente}</td>
                      <td>
                        <Link
                          to={`/alumno/${alumno._id}`}
                          className="link-alumno"
                        >
                          {alumno.nombreCompleto}
                        </Link>
                      </td>
                      <td>{alumno.year}</td>
                      <td>
                        {alumno.cuota}
                        {alumno.cuota ? 'al dia' : 'debe'}
                      </td>
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
          alumno={alumno}
          consultaAlumnos={consultaAlumnos}
        />
      </div>
    </>
  );
};

export default TableAlumnos;
