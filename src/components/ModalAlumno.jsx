import React from "react";
import { Modal } from "react-bootstrap";
import ModalFormAlumno from "./ModalFormAlumno";
import '../css/modalForm.css';


const ModalAlumno = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title >Modificar datos</Modal.Title>
      </Modal.Header>
      <ModalFormAlumno handleClose={handleClose} />
    </Modal>
  );
  
};

export default ModalAlumno;
