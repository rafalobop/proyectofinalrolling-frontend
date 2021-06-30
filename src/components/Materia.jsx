import React from 'react';
import '../css/materia.css';
const Materia = ({ materiaSeleccionada, setMateriaSeleccionada }) => {
  const { _id, nombreMateria, detalle, imagen } = materiaSeleccionada;
  return (
    <>
      <div className="materias-container">
        <div className="goback">
          <button
            type="button"
            className="btn-goback"
            onClick={() => setMateriaSeleccionada(null)}
          >
            Volver
          </button>
        </div>
        <div className="materias-top">
          <h2 className="materia-title">{nombreMateria}</h2>
          <div className="form-img">
            <img src={imagen} alt={nombreMateria} />
          </div>
        </div>
        <div className="materias-bottom">
          <form action="" className="form-materia">
            <label>Nombre de materia</label>
            <input type="text" name={nombreMateria} value={nombreMateria} />
            <label>Detalle</label>
            <input type="text" name={detalle} value={detalle} />
            <label>Año</label>
            <div className="materias-options">
              <div className="materias-years">
                <div className="form-materia-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="years"
                  />
                  <label class="form-check-label" for="years">
                    1
                  </label>
                </div>
                <div className="form-materia-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="years"
                  />
                  <label class="form-check-label" for="years">
                    2
                  </label>
                </div>
                <div className="form-materia-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="years"
                  />
                  <label class="form-check-label" for="years">
                    3
                  </label>
                </div>
                <div className="form-materia-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="years"
                  />
                  <label class="form-check-label" for="years">
                    4
                  </label>
                </div>
              </div>
              <div className="form-materia-buttons">
                <button className="btn-modificar">Modificar</button>
                <button className="btn-guardar">Guardar</button>
                <button className="btn-eliminar">Eliminar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Materia;
