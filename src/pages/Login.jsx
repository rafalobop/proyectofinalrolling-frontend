import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import "../css/LoginForm.css"

import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Container fluid>
  <Row className="bg-dark">
  <Col  xl={7} lg={7} className="login-bg d-none d-lg-block">
     <div className="position-absolute titulo p-4">
     <h3 className="font-weight-bold text-dark text-uppercase">CodeSchool</h3>
                <p className="lead text-dark">descripcion</p>
            </div>
            </Col>

            <Col  xl={5} lg={5} className="bg-dark d-flex flex-column align-items-end min-vh-100">
          <div className="align-self-center w-100 px-lg-5 py-lg-4 p-4 mt-auto mb-auto">
                    <h1 className="font-weight-bold mb-4">Iniciar Sesión</h1>
                    
                    <p className="text-muted mb-5">Ingresa la siguiente información.</p>                    
                     
                    <LoginForm />

                </div>
                </Col>
            </Row>
</ Container>

    
  );
};


export default Login;