import React, { useState } from "react";
import { addAlumno } from "../helpers/rutaAlumnos";

const AddAlumnoForm = ({ setShow }) => {
  //const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    nombreCompleto: "",
    domicilio: "",
    contacto: "",
    año: "",
    fechaNacimiento: "",
    dni: "",
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
      // console.log(resp);

      setFormValues({
        nombreCompleto: "",
        domicilio: "",
        contacto: "",
        anio: "",
        fechaNacimiento: "",
        dni: "",
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
        <textarea
          className="form-control"
          required
          name="contacto"
          value={formValues.contacto}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Curso</label>
        <input
          type="text"
          className="form-control"
          name="anio"
          value={formValues.anio}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Fecha de fechaNacimiento</label>
        <input
          type="text"
          className="form-control"
          name="fechaNacimiento"
          required
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
      <div>
        <button type="submit" className="btn btn-outline-info">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default AddAlumnoForm;
