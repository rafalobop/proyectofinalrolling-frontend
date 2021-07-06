import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { modifMateria } from '../helpers/rutaMateria';
import { useParams } from 'react-router';
const FormModalMateria = ({ materiaSeleccionada, handleClose, setMateria }) => {
  const { id } = useParams();

  const { nombreMateria, detalle, imagen } = materiaSeleccionada.materia;
  const [formValues, setFormValues] = useState({
    nombreMateria,
    detalle,
    imagen,
  });
  const [nuevaMateria, setNuevaMateria] = useState(false);
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevaMateria === false) {
      modifMateria(formValues, id).then((respuesta) => {
        setMateria(respuesta.materia);
      });
      setNuevaMateria(true);
      handleClose();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="form-group">
            <label>Título</label>
            <input
              className="form-control"
              rows="3"
              required
              name="nombreMateria"
              value={formValues.nombreMateria}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Imagen</label>
            <input
              className="form-control"
              rows="3"
              required
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
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="outline-info">
            Guardar
          </Button>
        </Modal.Footer>
      </form>
    </>
  );
};

export default FormModalMateria;
