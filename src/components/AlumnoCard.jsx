import React from 'react';
const AlumnoCard = ({ data }) => {
  const { alumno } = data;

  return (
    <>
      <div className="row mb-5 mt-2 ml-2">
        <div className="col-6">
          <h2>Datos del Alumno</h2>
          <hr />
            <p>Nombre y Apellido: {alumno.nombreCompleto}</p>
            <p>Curso: {alumno.year}</p>
            <p>Cuota: {alumno.cuota}</p>
            <p>Domicilio: {alumno.domicilio}</p>
            <p>Contacto: {alumno.contacto}</p>
            <p>Fecha de Nacimiento: {alumno.fechaNacimiento}</p>
            <p>DNI: {alumno.dni}</p>
        </div>
        </div>
    </>
  );
};

export default AlumnoCard;
