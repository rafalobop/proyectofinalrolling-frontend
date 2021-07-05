import React from "react";
import { Modal } from "react-bootstrap";
import ModalFormDetailAlumno from "./ModalFormDetailAlumno";



const ModalAlumnoDetail = ({ show, handleClose, alumno }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Perfil del Alumno</Modal.Title>
      </Modal.Header>
      <ModalFormDetailAlumno alumno={alumno} handleClose={handleClose} />
    </Modal>
  );
  
};

export default ModalAlumnoDetail;
