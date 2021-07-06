import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import FormModalMateria from './FormModalMateria';

const ModalMateria = ({
  materiaSeleccionada,
  show,
  handleClose,
  setMateriaSeleccionada,
  seleccion,
  setSeleccion,
}) => {
  console.log(`materiaSeleccionada`, materiaSeleccionada);
  console.log(`seleccion`, seleccion);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Materia</Modal.Title>
        </Modal.Header>
        <FormModalMateria
          handleClose={handleClose}
          materiaSeleccionada={materiaSeleccionada}
          seleccion={seleccion}
          setSeleccion={setSeleccion} /*materiaItem={materiaItem}*/
        />
      </Modal>
    </>
  );
};

export default ModalMateria;
