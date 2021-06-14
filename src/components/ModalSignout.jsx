import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

const ModalSignout = ({ toggleSignout, openModalSignout }) => {
  return (
    <>
      <Modal isOpen={openModalSignout} toggleSignout={toggleSignout}>
        <ModalHeader>
          <h5>Cerrar Sesión</h5>
        </ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleSignout}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalSignout;
