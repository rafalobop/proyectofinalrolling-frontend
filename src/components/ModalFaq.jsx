import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const ModalFaq = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);
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
