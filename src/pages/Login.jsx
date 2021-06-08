import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import "../css/LoginForm.css"

import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Container fluid>
      <Row className="bg-dark">
         <Col  xl={6} lg={12} className="login-bg">
            <div className="position-absolute titulo p-4">
                <h3 className="font-weight-bold text-dark text-uppercase">CodeSchool</h3>
                <p className="lead text-dark">descripcion</p>
            </div>
         </Col>
         <Col  xl={6} lg={12} className="d-flex">
              <div className="container align-self-center p-6">
                    <h1 className="font-weight-bold mb-3">Iniciar Sesión</h1>
                    <p className="text-muted mb-5">Ingresa la siguiente información.</p>                    
                     <LoginForm />
                </div>
         </Col>
       </Row>
</ Container>

    
  );
};


export default Login;