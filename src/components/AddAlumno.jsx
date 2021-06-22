import React from "react";
import AddAlumnoForm from "./AddAlumnoForm";

const AddAlumno = ({ show, setShow }) => {
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="col-12">
        <button className="btn btn-outline-info" onClick={handleShow}>
          {show ? "Ocultar Form" : "Agregar alumno"}
        </button>
      </div>
      {show && (
        <div className="col-md-8 offset-md-2 mb-3">
          <AddAlumnoForm setShow={setShow} />
        </div>
      )}
    </>
  );
};

export default AddAlumno;