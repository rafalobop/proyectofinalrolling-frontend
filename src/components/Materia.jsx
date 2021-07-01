import React, { useState } from 'react';
import '../css/materia.css';
import swal from 'sweetalert';
const Materia = ({ materiaSeleccionada, setMateriaSeleccionada }) => {
  const { _id, nombreMateria, detalle, imagen } = materiaSeleccionada;
  const [deshabilitarForm, setDeshabilitarForm] = useState(true);
  const [deshabilitarButton, setDeshabilitarButton] = useState(true);

  const enableForm = (e) => {
    e.preventDefault();
    if (deshabilitarForm) {
      setDeshabilitarForm(false);
      setDeshabilitarButton(false);
    } else {
      setDeshabilitarForm(true);
      swal('Bien!!!', 'Has guardado los cambios', 'success');

      setDeshabilitarButton(true);
    }
  };

  const eliminarMateria = (e) => {
    e.preventDefault();
    swal({
      title: `Eliminar ${nombreMateria}?`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(`Materia: ${nombreMateria}, ha sido eliminada`, {
          icon: 'success',
        });
      }
    });
  };

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
            <input
              type="text"
              name={nombreMateria}
              disabled={deshabilitarForm}
              value={nombreMateria}
            />
            <label>Detalle</label>
            <input
              type="text"
              name={detalle}
              disabled={deshabilitarForm}
              value={detalle}
            />
            <label>Año</label>
            <div className="materias-options">
              <div className="materias-years">
                <div className="form-materia-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    disabled={deshabilitarForm}
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
                    disabled={deshabilitarForm}
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
                    disabled={deshabilitarForm}
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
                    disabled={deshabilitarForm}
                    value=""
                    id="years"
                  />
                  <label class="form-check-label" for="years">
                    4
                  </label>
                </div>
              </div>
              <div className="form-materia-buttons">
                <button
                  className="btn-modificar"
                  onClick={enableForm}
                  disabled={!deshabilitarButton}
                >
                  Modificar
                </button>
                <button
                  className="btn-guardar"
                  onClick={enableForm}
                  disabled={deshabilitarButton}
                >
                  Guardar
                </button>
                <button className="btn-eliminar" onClick={eliminarMateria}>
                  Eliminar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Materia;
