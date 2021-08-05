import React, { useState } from 'react';
import { addAlumno } from '../helpers/rutaAlumnos';

const AddAlumnoForm = ({ setShow }) => {
  const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    nombreCompleto: '',
    domicilio: '',
    contacto: '',
    year: '',
    expediente: '',
    cuota: '',
    dni: '',
    fechaNacimiento: '',
    alumno: id,
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAlumno(formValues).then((resp) => {
      

      setFormValues({
        nombreCompleto: '',
        domicilio: '',
        contacto: '',
        year: '',
        expediente: '',
        cuota: '',
        dni: '',
        fechaNacimiento: '',
      });
      
      setShow(false);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
          className="form-control"
          type="text"
          name="contacto"
          value={formValues.contacto}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Fecha de Nacimiento</label>
        <input
          className="form-control"
          type="text"
          name="fechaNacimiento"
          value={formValues.fechaNacimiento}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>DNI</label>
        <input
          className="form-control"
          type="text"
          name="dni"
          value={formValues.dni}
          onChange={handleChange}
        />
      </div>

     

      <div className="form-group">
        <label>Cuota</label>
        <select name="cuota">
          <option value={formValues.cuota} onChange={handleChange}>
            Pago
          </option>
          <option value={formValues.cuota} onChange={handleChange}>
            Adeuda
          </option>
        </select>
      </div>
      <div>
        <button type="submit" className="btn btn-outline-info">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default AddAlumnoForm;
