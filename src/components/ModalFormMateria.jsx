import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { modifMateria } from '../helpers/rutaMaterias';

import '../css/modalForm.css';
import { Row, Col } from 'react-bootstrap';

const ModalFormMateria = ({ materia, handleClose, consultaMaterias }) => {
  const datosMateria = materia.materia;
  // console.log(datosAlumno);
  const [formValues, setFormValues] = useState({
    nombreMateria: datosMateria.nombreCompleto,
    nota: datosMateria.nota,
    
  });
  console.log(`form`, formValues);
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    modifMateria(formValues, materia.materia._id).then((respuesta) => {
      handleClose();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Body>
        <Row>
          <Col xl={12} lg={12}>
            <div className="form-group">
              <label>Materia</label>
              <input
                type="text"
                className="form-control"
                name="nombreMateria"
                required
                value={formValues.nombreMateria}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Nota</label>
              <input
                type="text"
                className="form-control"
                name="nota"
                required
                value={formValues.nota}
                onChange={handleChange}
              />
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
