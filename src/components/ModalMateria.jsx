import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { modifMateria } from '../helpers/rutaMateria';

const ModalMateria = ({ materiaSeleccionada, show, handleClose }) => {
  const [formValues, setFormValues] = useState({
    nombreMateria: materiaSeleccionada.nombreMateria,
    detalle: materiaSeleccionada.detalle,
    imagen: materiaSeleccionada.imagen,
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    modifMateria(formValues, materiaSeleccionada._id).then((respuesta) => {
      console.log(respuesta);
      handleClose();
    });
    console.log('guardado');
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Título</label>
              <input
                type="text"
                className="form-control"
                name="title"
                required
                value={formValues.nombreMateria}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Imagen</label>
              <input
                type="text"
                className="form-control"
                name="imagen"
                value={formValues.imagen}
                onChange={handleChange}
              />
              <small>Url de imagen</small>
            </div>
            <div className="form-group">
              <label>Detalle</label>
              <textarea
                className="form-control"
                rows="3"
                required
                name="detalle"
                value={formValues.detalle}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} variant="outline-info">
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalMateria;
