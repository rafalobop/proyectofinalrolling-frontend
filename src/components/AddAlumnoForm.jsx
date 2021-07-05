import React, { useState } from "react";
import { addAlumno } from "../helpers/rutaAlumnos";

const AddAlumnoForm = ({ setShow }) => {
  const [formValues, setFormValues] = useState({
    expediente:"",
    nombreCompleto: "",
    año: "",
    
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
      console.log(resp);

      setFormValues({
        expediente:"",
        nombreCompleto: "",
        año: "",
        
      });

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
          name="año"
          value={formValues.año}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>expediente</label>
        <input
          type="text"
          className="form-control"
         
          name="expediente"
          required
          value={formValues.expediente}
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

export default AddAlumnoForm;
