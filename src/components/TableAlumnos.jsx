import React from "react";
import ModalCurso from "./ModalCurso";
import { Table } from "react-bootstrap";



const TableAlumnos = () => {
   
    const handleClose = () => {
        setShow(false);
        consultaCursos();
      };
      const handleShow = () => setShow(true);


  return (
        <>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <h1>Lista de Alumnos</h1>
              <hr />
            </div>
          </div>
          </div>

          <div className="row">

          <div className="col-12 mt-4">
          <Table striped bordered hover className="mt-2">
            <thead>
              <tr>
                <th>Nº Expediente</th>
                <th>Nombre y Apellido</th>
                <th>Curso</th>
                <th></th>
              </tr>
            </thead>
            </ Table>
        </div>
     </div>
                    
        </>
  );
};

      


export default TableAlumnos
