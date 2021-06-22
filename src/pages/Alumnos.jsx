import React, { useState } from 'react'
import TableAlumnos from "../components/TableAlumnos";
import AddAlumno from "../components/AddAlumno";
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
const Alumnos = () => {

  const [show, setShow] = useState(false);

    return (
      <>  
       <NavBar />
      <Sidebar />
    <div className="container mt-5">
      <div className="row">
        <div className="col color-titulo">
          <h1>Lista de Alumnos</h1>
          <hr /> 
          
                <AddAlumno setShow={setShow} show={show} />
                {show === false && <TableAlumnos />}
                
        </div>
      </div>
      </div>
      </>
    )
}

export default Alumnos
