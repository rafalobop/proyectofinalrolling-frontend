import React from "react";
import { Modal, Button } from "react-bootstrap";
import { modifAlumno } from "../helpers/rutaAlumnos";
import { Link } from "react-router-dom";


const ModalFormDetailAlumno = ({ alumno, handleClose }) => {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    modifAlumno( alumno._id).then((respuesta) => {
   console.log(respuesta);
    handleClose();
   });
  };
     
    
      return (
        <form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="form-group">
           Nombre y Apellido: {alumno.nombreCompleto}
          
          </div>
          <div className="form-group">
            Expediente: {alumno.expediente}
           
          </div>
    
          <div className="form-group">
            Curso: {alumno.año}
          </div>
          
          <div className="form-group">
          <Link to={`/alumno/${alumno._id}`} className="text-decoration-none">Calificaciones</Link>
          </div>

        </Modal.Body>
          <Modal.Footer >
            <Button type="submit" variant="outline-info">
              Cerrar
            </Button>
          </Modal.Footer>
        </form>
      );
    };

export default ModalFormDetailAlumno;