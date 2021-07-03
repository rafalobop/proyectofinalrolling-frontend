import React, { useState, useEffect } from 'react';
import '../css/listamaterias.css';
import Materia from './Materia';
import CardsMaterias from './CardsMaterias';

const ListaMaterias = ({ materias }) => {
  const { data } = materias;

  return (
    <>
      <div className="cards_container">
        {/* <CardsMaterias data={data} /> */}
      </div>
    </>
  );
};

export default ListaMaterias;
