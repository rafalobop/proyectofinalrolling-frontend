import React, { useState, useEffect } from 'react';
import '../css/listamaterias.css';
// import Materia from './Materia';
import CardsMaterias from './CardsMaterias';

const ListaMaterias = ({ materias, setMateriaSeleccionada }) => {
  const { data } = materias;

  return (
    <>
      <div className="cards_container">
        <CardsMaterias
          materias={materias}
          // materia={materia}
          // setMateria={setMateria}
          setMateriaSeleccionada={setMateriaSeleccionada}
        />
      </div>
    </>
  );
};

export default ListaMaterias;
