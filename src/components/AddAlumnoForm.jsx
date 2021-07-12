import React, { useState } from 'react';
import { addAlumno } from '../helpers/rutaAlumnos';

const AddAlumnoForm = ({ setShow, setAlumnos, alumnos }) => {
  // console.log(data);
  // const id = JSON.parse(localStorage.getItem("Id"));
  const [formValues, setFormValues] = useState({
    nombreCompleto: '',
    domicilio: '',
    contacto: '',
    year: '',
    expediente: '',
    cuota: '',
    // alumno: id,
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAlumno(formValues).then((resp) => {
      console.log(resp);

      setFormValues({
        nombreCompleto: '',
        domicilio: '',
        contacto: '',
        year: '',
        expediente: '',
        cuota: '',
      });
      // setAlumnos({
      //   ...alumnos,
      //   formValues,
      // });
      setShow(false);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
          value={formValues.year}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Expediente</label>
        <input
          type="text"
          className="form-control"
          name="expediente"
          value={formValues.expediente}
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
