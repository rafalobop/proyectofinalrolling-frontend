import React from 'react';
import { Modal } from 'react-bootstrap';
import ModalFormMateria from './ModalFormMateria';
import '../css/modalForm.css';

const ModalMateriaa = ({ show, handleClose, materia, consultaMaterias }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modificar materia</Modal.Title>
      </Modal.Header>
      <ModalFormMateria
        materia={materia}
        handleClose={handleClose}
        consultaMaterias={consultaMaterias}
      />
    </Modal>
  );
};

export default ModalMateriaa;
