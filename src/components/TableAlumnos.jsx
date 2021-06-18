import React , { useState } from "react";
import { Table } from "react-bootstrap";
import ModalAlumno from "./ModalAlumno";
import '../css/tableAlumnos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';


const TableAlumnos = () => {

  const data = [
    { id: 1, nombreCompleto : "Maria", curso: "1er año" },
    { id: 2, nombreCompleto : "Felipe", curso: "2do año" },
    { id: 3, nombreCompleto : "Paula", curso: "3er año" },
    { id: 4, nombreCompleto: " Lucas ", curso: "4to año" },
    
  ];


let id_alumno = "";

const [show, setShow] = useState(false);

const handleClose = () => {
  setShow(false);
  
};
const handleShow = () => setShow(true);

const modificaAlumno = (id) => {
  id_alumno = id;
    handleShow();
 
};

const deleteAlumno = (id) => {
   window.confirm("Borrar alumno?");

};


  return (
    <div>
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col color-titulo">
          <h1>Lista de Alumnos</h1>
          <hr />
   
        </div>
      </div>
      </div>

      <div className="container mt-5">
      <div className="row">
        
        <div className="col-12 mt-4">
        <Table striped bordered hover className="mt-2">
          <thead>
            <tr className="tabla">
              <th>Nº Expediente</th>
              <th>Nombre y Apellido</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
           
              {data.map((elemento) => ( 
                <tr key={elemento._id}>
                <td>{elemento.id}</td>
                <td>{elemento.nombreCompleto}</td>
                <td>{elemento.curso}</td>
               
                <td>
                  <button
                    className="btn btn-outline-dark mr-2">
                     <FontAwesomeIcon
                    icon={faAddressCard} onClick={() => {
                      modificaAlumno();
                    }}/>
                  </button>
                  <button
                    className="btn btn-outline-dark"> <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => {
                      deleteAlumno();
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
  </div>

  

        <ModalAlumno
          show={show}
          handleClose={handleClose}
          
        />
      </>
    
  </div>
);
};

export default TableAlumnos
