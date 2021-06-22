import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { modifAlumno } from "../helpers/rutaAlumnos";

import '../css/modalForm.css';
import { Row, Col } from 'react-bootstrap';



const ModalFormAlumno = ({alumno, handleClose}) => {
  
  const [formValues, setFormValues] = useState({
    nombreCompleto: alumno.nombreCompleto,
    domicilio: alumno.domicilio,
    contacto: alumno.contacto,
    curso: alumno.curso,
    fechaNacimiento: alumno.fechaNacimiento,
    dni: alumno.dni,  
    expediente: alumno.expediente,
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
          <label>Domicilio</label>
          <input
            type="text"
            className="form-control"
            name="domicilio"
            required
            value={formValues.domicilio}
            onChange={handleChange}
          />
         
        </div>
        <div className="form-group">
          <label>Contacto</label>
          <input
            type="text"
            className="form-control"
            name="contacto"
            required
            value={formValues.contacto}
            onChange={handleChange}
          />
         
        </div>
        <div className="form-group">
          <label>Curso</label>
          <input
            type="text"
            className="form-control"
            name="curso"
            required
            value={formValues.curso}
            onChange={handleChange}
          />
         
        </div>
        
        </Col>
        <Col xl={6} lg={6}>
            <div>
                
            </div>

           <div className="form-group">
          <label>Fecha de nacimiento </label>
          <input
            type="text"
            className="form-control"
            name="fechaNacimiento"
            required
            value={formValues.fechaNacimiento}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>DNI</label>
          <input
            type="text"
            className="form-control"
            name="dni"
            required
            value={formValues.dni}
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
