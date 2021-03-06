import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { postLogin } from '../helpers/rutaUsuarios';
import '../css/LoginForm.css';
import uuid from 'uuid/dist/v4';

const LoginForm = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [user, setUser] = useState({
    data: { ok: null },
    loading: false,
  });
  // console.log(user);

  const datosUsuario = () => {
    localStorage.setItem('token', JSON.stringify(user.data.token));
    localStorage.setItem('id', JSON.stringify(user.data.usuario._id));
    localStorage.setItem('nombre', JSON.stringify(user.data.usuario.nombre));
    localStorage.setItem(
      'apellido',
      JSON.stringify(user.data.usuario.apellido)
    );
    localStorage.setItem(
      'fechaIngreso',
      JSON.stringify(user.data.usuario.fechaIngreso)
    );
    localStorage.setItem(
      'contacto',
      JSON.stringify(user.data.usuario.contacto)
    );
    localStorage.setItem('role', JSON.stringify(user.data.usuario.role));
    localStorage.setItem('id', JSON.stringify(uuid()));
    localStorage.setItem(
      'nombreInstit',
      JSON.stringify(user.data.usuario.nombreInstit)
    );
    localStorage.setItem(
      'contactoInstit',
      JSON.stringify(user.data.usuario.contactoInstit)
    );
    localStorage.setItem(
      'direccion',
      JSON.stringify(user.data.usuario.direccion)
    );
  };

  useEffect(() => {
    if (user.data.ok) {
      datosUsuario();
      history.push('./home');
    }
  }, [user, history]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      ...user,
      loading: true,
    });

    postLogin(formValues).then((datos) => {
      setUser(datos);
    });

    setFormValues({
      email: '',
      password: '',
    });
  };
  return (
    <>
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electr??nico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contrase??a</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="color-boton" type="submit">
          Ingresar
        </Button>
      </Form>
      {user.data.ok === false && (
        <div className="alert alert-danger mt-3 text-center" role="alert">
          {user.data.err.message}
        </div>
      )}
    </>
  );
};

export default LoginForm;
