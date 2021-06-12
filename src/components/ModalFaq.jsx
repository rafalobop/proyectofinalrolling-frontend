import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const ModalFaq = ({ openModal, toggle }) => {
  return (
    <>
      <Modal isOpen={openModal} toggle={toggle}>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalFaq;
