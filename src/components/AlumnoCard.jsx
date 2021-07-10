import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getAlumnoId } from '../helpers/rutaAlumnos';
import Layout from './Layout';
import { Table } from 'react-bootstrap';
import '../css/alumnocard.css';
const AlumnoCard = () => {
  const [alumno, setAlumno] = useState({});
  const [cuota, setCuota] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    getAlumnoId(id).then((datos) => {
      // console.log(datos);
      setAlumno(datos.alumno);
    });
  }, [id]);

  const cambiarCuota = () => {
    setCuota(!cuota);
    setAlumno(alumno);
  };
  return (
    <>
      <Layout />
      <div className="home-container">
        <div className="card-alumno-container">
          <h2 className="card-alumno-title">Datos del Alumno</h2>
          <p className="alumno-item">
            <span className="alumno-tag">Nombre y Apellido: </span>
            {alumno.nombreCompleto}
          </p>
          <p className="alumno-item">
            <span className="alumno-tag">Domicilio: </span>
            {alumno.domicilio}
          </p>
          <p className="alumno-item">
            <span className="alumno-tag">Telefono: </span>
            {alumno.contacto}
          </p>
          <p className="alumno-item">
            <span className="alumno-tag">Año de cursado: </span>
            {alumno.year}
          </p>
          <p className="alumno-item">
            <span className="alumno-tag">Expediente: </span>
            {alumno.expediente}
          </p>
          <p className="alumno-item">
            <span className="alumno-tag">Cuota: </span>
            {alumno.cuota}
            {cuota ? (
              <span class="badge badge-success" onClick={cambiarCuota}>
                Al dia
              </span>
            ) : (
              <span class="badge badge-danger" onClick={cambiarCuota}>
                Debe
              </span>
            )}
          </p>
        </div>
        <div className="materias-cursadas">
          <div className="calificaciones-materias">
            <Table striped bordered hover className="mt-2">
              <thead>
                <tr className="tabla">
                  <th>Materias</th>
                  <th>1° año</th>
                  <th>2° año</th>
                  <th>3° año</th>
                  <th>4° año</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlumnoCard;
