import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/LoginForm.css';
import logo from '../images/logo.png';
import logo2 from '../images/logo2.png';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <Container fluid>
<<<<<<< HEAD
      <Row className="bg-dark">
        <Col xl={7} lg={7} className="login-bg d-none d-lg-block">
          <div className="logo w-50 position-absolute p-2 ml-2">
            <img src={logo} className="img-fluid" alt="logo" />
          </div>
        </Col>
        <Col
          xl={5}
          lg={5}
          className="bg-dark d-flex flex-column align-items-end min-vh-100"
        >
          <div className="logo-sesion px-lg-5 pt-lg-4 pb-lg-3 p-4 mt-auto mb-auto">
            <img
              src={logo2}
              className="w-100 mx-auto d-none-lg d-block"
              alt="img-fluid"
            />
            <h1 className="font-weight-bold mb-4">Iniciar Sesión</h1>
            <p className=" mb-5">Ingresa la siguiente información.</p>
=======
  <Row >
  <Col  xl={7} lg={7} className="left-login d-none d-lg-block">
     <div className="logo w-50 position-absolute p-2 ml-2">
     <img src={logo} class="img-fluid" />
      </div>
      </Col>
        <Col  xl={5} lg={5} className="color-login d-flex flex-column align-items-end min-vh-100">
          <div className="logo-form p-4 mt-auto mb-auto">
              <img src={logo2} className="w-100 mx-auto logo-form" alt="img-fluid"/>
              <h1 className="titulo-sesion font-weight-bold mb-4">Iniciar Sesión</h1>
              <p className=" mb-4">Ingresa la siguiente información.</p>                    
                     
                <LoginForm />
>>>>>>> origin/rocio

            <LoginForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
