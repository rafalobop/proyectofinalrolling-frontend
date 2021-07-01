import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/modalsignout.css';

const ModalSignout = ({ toggleSignout, openModalSignout }) => {
  return (
    <>
      <Modal isOpen={openModalSignout} toggleSignout={toggleSignout}>
        <ModalHeader>
          <h5>Cerrar Sesión</h5>
        </ModalHeader>
        <ModalBody>
          <p className="signout">¿Desea cerrar sesión?</p>
          <Link to="/">
            <button className="footer-btn">Si</button>
          </Link>
          <button className="footer-btn" onClick={toggleSignout}>
            No
          </button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalSignout;
