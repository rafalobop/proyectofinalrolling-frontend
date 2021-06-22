import React from "react";
import { Modal } from "react-bootstrap";
import ModalFormAlumno from "./ModalFormAlumno";
import '../css/modalForm.css';


const ModalAlumno = ({ show, handleClose, alumno }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title >Modificar datos</Modal.Title>
      </Modal.Header>
      <ModalFormAlumno alumno={alumno} handleClose={handleClose} />
    </Modal>
  );
  
};

export default ModalAlumno;
