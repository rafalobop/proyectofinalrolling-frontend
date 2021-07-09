import axios from 'axios';
import qs from 'qs';

export const getAlumnos = async () => {
  let url = `http://localhost:3004/alumnos`;

  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  };

  const resp = await axios(url, options);
  const { alumno } = resp.data;
  // const { data } = resp.data.alumno;
  // console.log(alumno);
  return alumno;
};

export const getAlumnoId = async (id) => {
  let url = `http://localhost:3004/alumnos/${id}`;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  };

  const resp = await axios(url, options);
  const { data } = resp;
  console.log(data);
  return data;
};

//Crear nuevo alumno
export const addAlumno = async (datos) => {
  // console.log(datos);
  // const token = JSON.parse(localStorage.getItem('token')) || '';
  let url = 'http://localhost:3004/alumnos';

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      // token: token,
    },
    data: qs.stringify(datos),
  };

  const resp = await axios(url, options);
  const { data } = resp;
  console.log(resp);
  return data;
};

//Actualizar alumno
export const modifAlumno = async (datos, id) => {
  // console.log(datos);
  // const token = JSON.parse(localStorage.getItem('token')) || '';
  let url = `http://localhost:3004/alumnos/${id}`;

  const options = {
    method: 'PUT',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      // token: token,
    },
    data: qs.stringify(datos),
  };

  const resp = await axios(url, options);
  const { data } = resp;
  console.log(data);
  return data;
};

//Inactivar un alumno
export const delAlumno = async (id) => {
  // const token = JSON.parse(localStorage.getItem('token')) || '';
  let url = `http://localhost:3004/alumnos/${id}`;

  const options = {
    method: 'DELETE',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      // token: token,
    },
  };

  const resp = await axios(url, options);
  const { data } = resp;
  console.log(data);
  return data;
};
