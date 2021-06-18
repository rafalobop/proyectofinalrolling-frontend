import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import '../css/modalsettings.css';

const ModalSettings = ({ openModalSettings, toggleSettings }) => {
  return (
    <>
      <Modal isOpen={openModalSettings} toggleSettings={toggleSettings}>
        <ModalHeader>
          <h5>Configuración</h5>
        </ModalHeader>
        <ModalBody>
          <div className="switch-button">
            <input
              type="checkbox"
              name="switch-button"
              id="switch-label"
              className="switch-button__checkbox"
            />
            <label for="switch-label" className="switch-button__label">
              <span>
                <FontAwesomeIcon icon={faSun} className="switch-icon" />
              </span>
              <span>
                <FontAwesomeIcon icon={faMoon} className="switch-icon" />
              </span>
            </label>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleSettings}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalSettings;
