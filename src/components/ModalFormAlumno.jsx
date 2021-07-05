import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { modifAlumno } from "../helpers/rutaAlumnos";

import '../css/modalForm.css';
import { Row, Col } from 'react-bootstrap';



const ModalFormAlumno = ({alumno, handleClose}) => {
  
  const [formValues, setFormValues] = useState({
    expediente: alumno.expediente,
    nombreCompleto: alumno.nombreCompleto,
    año: alumno.año,
    
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    modifAlumno(formValues, alumno._id).then((respuesta) => {
      console.log(respuesta);
      handleClose();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Body >
      <Row>
        <Col xl={6} lg={6} >
        <div className="form-group">
          <label>Nombre y Apellido</label>
          <input
            type="text"
            className="form-control"
            name="nombreCompleto"
            required
            value={formValues.nombreCompleto}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>expediente</label>
          <input
            type="text"
            className="form-control"
            name="expediente"
            value={formValues.expediente}
            onChange={handleChange}
          />
         
        </div>
        <div className="form-group">
          <label>Curso</label>
          <input
            type="text"
            className="form-control"
            name="año"
            required
            value={formValues.año}
            onChange={handleChange}
          />
        </div>
        
        </Col>
      
  
      </Row>
   
      </Modal.Body>
      <Modal.Footer >
        <Button type="submit" variant="outline-info">
          Guardar
        </Button>
      </Modal.Footer>
    </form>
  );
};

export default ModalFormAlumno;
