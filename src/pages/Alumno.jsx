import React, { useEffect, useState } from "react";
import { getAlumnoId } from "../helpers/rutaAlumnos";
import { useParams } from "react-router-dom";
import Layout from '../components/Layout';
import "../css/alumnodetail.css";
import AlumnoDetail from "../components/AlumnoDetail";

const Alumno = () => {
  const [data, setData] = useState({
    ok: false,
    alumno: {},
  });

  let { id } = useParams();

  useEffect(() => {
    getAlumnoId(id).then((datos) => {
      setData(datos);
    });
  }, [id]);

  

  return (
    <>

    <Layout />

    <div className="container mt-2 alumno-container">
      {data.ok ? (
        <AlumnoDetail data={data} />
      ) : (
        <div className="row">
          <div className="col">
            <div className="alert alert-primary text-center" role="alert">
              El Alumno no existe
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};
export default Alumno;
