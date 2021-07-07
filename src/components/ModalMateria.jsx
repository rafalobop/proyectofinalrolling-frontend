import React from 'react';
import { Modal } from 'react-bootstrap';
import FormModalMateria from './FormModalMateria';

const ModalMateria = ({
  materiaSeleccionada,
  show,
  setMateria,
  materia,
  handleClose,
  seleccion,
  setSeleccion,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Materia</Modal.Title>
        </Modal.Header>
        <FormModalMateria
          materia={materia}
          setMateria={setMateria}
          handleClose={handleClose}
          materiaSeleccionada={materiaSeleccionada}
          seleccion={seleccion}
          setSeleccion={setSeleccion}
        />
      </Modal>
    </>
  );
};

export default ModalMateria;
