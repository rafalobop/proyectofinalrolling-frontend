import React, { useState } from 'react';
import { Button, ModalBody, ModalFooter } from 'reactstrap';
import { addMateria, getMaterias } from '../helpers/rutaMateria';
import swal from 'sweetalert';

const FormNuevaMateria = ({ toggle, setMaterias }) => {
  const [formValues, setFormValues] = useState({
    nombreMateria: '',
    imagen: '',
    detalle: '',
  });
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const consultarMaterias = () => {
    getMaterias().then((materia) => {
      setMaterias({
        data: materia,
        loading: false,
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMateria(formValues).then((resp) => {
      console.log(resp);

      setFormValues({
        nombreMateria: '',
        detalle: '',
        imagen: '',
      });
      swal('Materia Agregada', 'Actualiza para ver los cambios', 'success');
      consultarMaterias();

      toggle();
    });
  };
  return (
    <>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Título</label>
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
          <div>
            <button type="submit" className="btn btn-outline-info">
              Guardar
            </button>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Cerrar
        </Button>
      </ModalFooter>
    </>
  );
};

export default FormNuevaMateria;
