import React from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import FormNuevaMateria from './FormNuevaMateria';

const ModalNuevaMateria = ({ openModal, toggle, materias, setMaterias }) => {
  return (
    <>
      <Modal isOpen={openModal} toggle={toggle}>
        <ModalHeader>Nueva Materia</ModalHeader>
        <FormNuevaMateria
          toggle={toggle}
          materias={materias}
          setMaterias={setMaterias}
        />
      </Modal>
    </>
  );
};

export default ModalNuevaMateria;
