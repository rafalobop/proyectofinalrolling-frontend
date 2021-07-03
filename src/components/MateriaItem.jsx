import React from 'react';
import { Link } from 'react-router-dom';
import Materia from './Materia';

const MateriaItem = ({ data, materiaSeleccionada, setMateriaSeleccionada }) => {
  const seleccionarMateria = (materia) => {
    const seleccion = data.find((mat) => {
      return mat._id === materia._id;
    });
    console.log(seleccion);
    if (materiaSeleccionada === {}) {
      setMateriaSeleccionada(seleccion);
      console.log(materiaSeleccionada);
    } else {
      setMateriaSeleccionada({});
    }
  };
  return (
    <>
      {/* {materiaSeleccionada === {} && (
        <Materia materiaSeleccionada={materiaSeleccionada} />
      )} */}
      <div className="cards_items_container">
        {data.map((materia) => (
          <div
            key={materia._id}
            className="materias_card"
            onClick={() => seleccionarMateria(materia)}
          >
            <Link to={`/materias/:${materia._id}`}>
              <div className="materias_card-header">
                <img src={materia.imagen} alt={materia.nombreMateria} />
              </div>
              <div className="materias_card-text">
                <p>{materia.nombreMateria}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default MateriaItem;
