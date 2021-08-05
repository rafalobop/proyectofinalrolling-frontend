import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { modifAlumno } from '../helpers/rutaAlumnos';
import { Link } from 'react-router-dom';


import '../css/modalForm.css';
import { Row, Col } from 'react-bootstrap';

const ModalFormAlumno = ({ alumno, handleClose, consultaAlumnos }) => {
  const [materia, setMateria] = useState({});
  
  const datosAlumno = alumno.alumno;
  
  const [formValues, setFormValues] = useState({
    nombreCompleto: datosAlumno.nombreCompleto,
    domicilio: datosAlumno.domicilio,
    contacto: datosAlumno.contacto,
    year: datosAlumno.year,
    expediente: datosAlumno.expediente,
    cuota: datosAlumno.cuota,
  });
  
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    modifAlumno(formValues, alumno.alumno._id).then((respuesta) => {
      handleClose();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Body>
        <Row>
          <Col xl={12} lg={12}>
          <div className="form-group">
              <label>Expediente</label>
              <input
                type="text"
                className="form-control"
                name="expediente"
                required
                value={formValues.expediente}
                onChange={handleChange}
              />
            </div>
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
              <label>Curso</label>
              <input
                type="text"
                className="form-control"
                name="year"
                required
                value={formValues.year}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Domicilio</label>
              <input
                type="text"
                className="form-control"
                name="domicilio"
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
                value={formValues.contacto}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Fecha de Nacimiento</label>
              <input
                type="text"
                className="form-control"
                name="fechaNacimiento"
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
                value={formValues.dni}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
            <Link to={`/materia/${materia._id}`}> <label>Calificaciones</label></Link>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="outline-info">
          Guardar
        </Button>
      </Modal.Footer>
    </form>
  );
};

export default ModalFormAlumno;
