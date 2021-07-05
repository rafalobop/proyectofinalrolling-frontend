import React , { useState, useEffect } from "react";
import { getAlumnos, delAlumno, getAlumnoId } from "../helpers/rutaAlumnos";
import { Table } from "react-bootstrap";
import ModalAlumno from "./ModalAlumno";
import ModalAlumnoDetail from "./ModalAlumnoDetail";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import '../css/tableAlumnos.css';


const TableAlumnos = () => {

let id_alumno = "";

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

const perfilAlumno = (id) => {
  id_alumno = id;

  getAlumnoId(id_alumno).then((resp) => {
    console.log(resp);
    setAlumno(resp);

    handleShow();
  });
};


const deleteAlumno = (id) => {
  let validar = window.confirm("Dar de baja al alumno?");
  if (validar) {
    delAlumno(id).then((resp) => {
      consultaAlumnos();
    });
  }
}



  return (
    <div>
    <>
      
    {/*{!alumnos.loading && (*/}
        <div className="col-12 mt-4"></div>
        <Table striped bordered hover className="mt-2">
          <thead>
            <tr className="tabla">
              <th>Nº Expediente</th>
              <th>Nombre y Apellido</th>
              <th>Curso</th>
             
              <th></th>
            </tr>
          </thead>
          <tbody>
           
        
                <td>{alumno.expediente}</td>
                <td>{alumno.nombreCompleto}</td>
                <td>{alumno.año}</td>
                <td></td>
                <td>

                <button
                    className="btn btn-outline-dark">
                     <FontAwesomeIcon
                    icon={faAddressCard} onClick={() => {
                      perfilAlumno(alumno._id);
                    }}/>
                  </button>

                  <button
                    className="btn btn-outline-dark">
                     <FontAwesomeIcon
                    icon={faAddressCard} onClick={() => {
                      modificaAlumno(alumno._id);
                    }}/>
                  </button>

                  <button
                    className="btn btn-outline-dark mt-2"> <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => {
                      deleteAlumno(alumno._id);
                    }}
                  />
                  </button>
                 </td>
                 {/*</tr>
              ))}*/}
          </tbody>
        </Table>
 
        <ModalAlumno
          show={show}
          handleClose={handleClose}
          alumno={alumno.alumno}
        />
        <ModalAlumnoDetail
          show={show}
          handleClose={handleClose}
          alumno={alumno.alumno}
        />
      </>
    {/*)}*/}
  </div>
);
}


export default TableAlumnos
