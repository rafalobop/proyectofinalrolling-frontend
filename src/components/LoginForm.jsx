import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { postLogin } from '../helpers/rutaUsuarios';

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

  useEffect(() => {
    if (user.data.ok) {
      localStorage.setItem('token', JSON.stringify(user.data.token));
      localStorage.setItem('id', JSON.stringify(user.data.usuario._id));
      localStorage.setItem('usuario', JSON.stringify(user.data.usuario.nombre));

      history.push('./');
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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChange}
            value={formValues.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="email"
            onChange={handleChange}
            value={formValues.password}
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
