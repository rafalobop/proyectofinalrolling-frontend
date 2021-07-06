import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { modifMateria } from '../helpers/rutaMateria';

const FormModalMateria = ({
  materiaSeleccionada,
  handleClose,
  seleccion,
  setSeleccion,
}) => {
  const { nombreMateria, detalle, imagen } = materiaSeleccionada.materia;

  const [formValues, setFormValues] = useState({
    nombreMateria,
    detalle,
    imagen,
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // modifMateria(formValues, materia._id).then((respuesta) => {
    //   console.log(respuesta);
    // });
    handleClose();
    console.log('guardado');
  };

  return (
    <>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
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
        <Button type="submit" variant="outline-info">
          Guardar
        </Button>
      </Modal.Footer>
    </>
  );
};

export default FormModalMateria;
