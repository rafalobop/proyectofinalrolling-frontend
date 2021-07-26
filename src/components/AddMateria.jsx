import React from 'react';
import AddMateriaForm from './AddMateriaForm';

const AddMateria = ({ show, setShow, setMaterias, materias }) => {
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="col-12">
        <button className="btn btn-outline-info" onClick={handleShow}>
          {show ? 'Ocultar Form' : 'Agregar materia'}
        </button>
      </div>
      {show && (
        <div className="col-md-8 offset-md-2 mb-3">
          <AddMateriaForm
            setShow={setShow}
            setMaterias={setMaterias}
            materias={materias}
          />
        </div>
      )}
    </>
  );
};

export default AddMateria;
