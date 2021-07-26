import React, { useState } from 'react';
import { delMateria, getMateriaId } from '../helpers/rutaAlumnoss';
import { Table } from 'react-bootstrap';
import ModalMateria from './ModalMateria';
import '../css/tableAlumnos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';

const TableMaterias = ({ materias, setMaterias, consultaMaterias }) => {
  
  console.log(materias.data);
  let id_materia = '';

  const [materia, setMateria] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    swal('Listo!', 'Materia modificado', 'success');
    consultaMaterias();
  };

  const handleShow = () => {
    setShow(true);
  };

  const modificaMateria = (id) => {
    id_materia = id;

    getMateriaId(id_materia).then((resp) => {
      setMateria(resp);

      handleShow();
    });
  };

  const deleteMateria = (id) => {
    let validar = window.confirm('Borrar materia?');
    if (validar) {
      delMateria(id).then((resp) => {
        consultaMateriass();
      });
    }
    swal('Listo!', 'Materia eliminado', 'warning');
  };
  return (
    <>
      <div className="container mt-5">
        {!materias.loading && (
          <div className="row">
            <div className="col-12 mt-4">
              <Table striped bordered hover className="mt-2">
                <thead>
                  <tr className="tabla">
                    
                    <th>Materias</th>
                    <th>Nota</th>
                    <th>Alumno</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {materias.data.map((materia) => (
                    <tr key={materia._id}>
                      <td>{materia.nombreMateria}</td>
                      <td>
          
                      </td>
                      <td>{materia.nota}</td>
                      {/* <td>{materia.alumno.nombreMateria}</td> */}

                      
                      <td>
                        <button className="btn btn-outline-dark mr-2">
                          <FontAwesomeIcon
                            icon={faEdit}
                            onClick={() => {
                              modificaMateria(materia._id);
                            }}
                          />
                        </button>
                        <button className="btn btn-outline-dark">
                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => {
                              deleteMateria(materia._id);
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

        <ModalMateria
          show={show}
          handleClose={handleClose}
          materia={materia}
          consultaMaterias={consultaMaterias}
        />
      </div>
    </>
  );
};

export default TableMaterias;
