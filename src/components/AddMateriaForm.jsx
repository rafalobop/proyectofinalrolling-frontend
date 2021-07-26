import React, { useState } from 'react';
import { addMateria } from '../helpers/rutaMaterias';

const AddMateriaForm = ({ setShow, setMaterias, materias }) => {
  // console.log(data);
  const id = JSON.parse(localStorage.getItem("Id"));
  const [formValues, setFormValues] = useState({
    nombreMateria: '',
    nota: '',
    alumno: id,
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
    addMateria(formValues).then((resp) => {
      console.log(resp);

      setFormValues({
        nombreMateria: '',
    
    nota: '',
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
          value={formValues.nota}
          onChange={handleChange}
        />
      </div>
      <div>
     
        <button type="submit" className="btn btn-outline-info">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default AddMateriaForm;
