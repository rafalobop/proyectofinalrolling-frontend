import React, { useState } from 'react'
import TableAlumnos from "../components/TableAlumnos";
import AddAlumno from "../components/AddAlumno";

const Alumnos = () => {

  const [show, setShow] = useState(false);

    return (
      
        <div className="container mt-5">
      <div className="row">
        <div className="col color-titulo">
          <h1>Lista de Alumnos</h1>
          <hr />
          <TableAlumnos />
          <>
                <div className="col">
                  <h3>Bienvenido</h3>
                </div>
                <AddAlumno setShow={setShow} show={show} />

                {show === false && <TableAlumnos />}
              </>
          
        </div>
      </div>
      </div>

     
    )
}

export default Alumnos
