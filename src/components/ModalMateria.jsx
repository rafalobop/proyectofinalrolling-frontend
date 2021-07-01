import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalMateria = ({ openModal, toggle, materias }) => {
  const { data } = materias;
  console.log(data);

  return (
    <>
      {data.map((materia) => (
        <Modal isOpen={openModal} toggle={toggle}>
          <ModalHeader></ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      ))}
    </>
  );
};

export default ModalMateria;
