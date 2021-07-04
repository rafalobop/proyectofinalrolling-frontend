import React from 'react';
import '../css/materias.css';
const Materias = ({ materias }) => {
  console.log(materias);
  return (
    <>
      <div className="materias_container">
        <h3 className="my-3 text-center">Lista de Materias</h3>
        <div className="row">
          {materias.data.map((materia) => {
            return (
              <div className="col">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Materias</th>
                      <th scope="col">Detalle</th>
                      <th scope="col">Año</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{materia._id}</td>
                      <td>{materia.nombreMateria}</td>
                      <td>{materia.detalle}</td>
                      <td>{materia.anio}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Materias;
