import React, { useState } from 'react';
import '../css/cardsmaterias.css';
import Materia from './Materia';
const CardsMaterias = ({ materias }) => {
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(null);

  const verMateria = (materia) => {
    const materiaSelec = materias.data.find((mat) => {
      return mat._id === materia._id;
    });
    setMateriaSeleccionada(materiaSelec);
  };

  return (
    <>
      {materiaSeleccionada ? (
        <Materia
          materiaSeleccionada={materiaSeleccionada}
          setMateriaSeleccionada={setMateriaSeleccionada}
        />
      ) : (
        <div className="cards_items_container">
          {materias.data.map((materia) => (
            <div
              key={materia._id}
              className="materias_card"
              onClick={() => verMateria(materia)}
            >
              <div className="materias_card-header">
                <img src={materia.imagen} alt={materia.nombreMateria} />
              </div>
              <div className="materias_card-text">
                <p>{materia.nombreMateria}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CardsMaterias;
