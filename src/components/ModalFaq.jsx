import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../css/modalfaq.css';

const ModalFaq = ({ openModal, toggle }) => {
  return (
    <>
      <Modal isOpen={openModal} toggle={toggle}>
        <ModalHeader>
          <h5>Preguntas Frecuentes</h5>
        </ModalHeader>
        <ModalBody>
          <div className="question">
            <p>¿Como cambio el nombre de usuario?</p>
          </div>
          <div className="answer">
            <p>
              Haz click en el icono de usuario, y puedes modificar tus datos en
              la ventana que se abre. Presionas guardar cuando termines, y
              listo!.
            </p>
            <hr />
          </div>
          <div className="question">
            <p>¿Si cierro sesión se pierden los datos que no guarde?</p>
          </div>
          <div className="answer">
            <p>
              El sistema Codeschool guarda todos los datos de tu sesión para que
              no pierdas nada que no hayas podido guardar.
            </p>
            <hr />
          </div>
          <div className="question">
            <p>¿Puedo crear un nuevo usuario con mi mail?</p>
          </div>
          <div className="answer">
            <p>No puedes. Solo puedes crear un usuario con tu mail.</p>
          </div>
        </ModalBody>
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
