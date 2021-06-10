import React from 'react';
import { Form, Button } from 'react-bootstrap';
// import Footer from './Footer';

const LoginForm = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button className="color-boton" type="submit">
          Ingresar
        </Button>
      </Form>
      {/* <Footer /> */}
    </>
  );
};

export default LoginForm;
