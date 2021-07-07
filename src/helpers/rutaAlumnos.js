import axios from 'axios';
import qs from 'qs';

export const getAlumnos = async (desde = 0, limite = 10) => {
  let url = `http://localhost:3004/alumnos?desde=${desde}&limite=${limite}`;

  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  };

  const resp = await axios(url, options);
  console.log(`resp`, resp);
  const { data } = resp;
  return data;
};

export const getAlumnoId = async (id) => {
  let url = `http://localhost:3004/alumnos/${id}`;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    console.log(data);
    return data;
  } catch (error) {
    return {
      data: error.response.data,
      loading: false,
    };
  }
};

//Crear nuevo alumno
export const addAlumno = async (datos) => {
  console.log(datos);
  const token = JSON.parse(localStorage.getItem('token')) || '';
  let url = 'http://localhost:3004/alumnos';

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      token: token,
    },
    data: qs.stringify(datos),
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    console.log(resp);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};

//Actualizar alumno
export const modifAlumno = async (datos, id) => {
  console.log(datos);
  const token = JSON.parse(localStorage.getItem('token')) || '';
  let url = `http://localhost:3004/alumnos/${id}`;

  const options = {
    method: 'PUT',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      token: token,
    },
    data: qs.stringify(datos),
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};

//Inactivar un alumno
export const delAlumno = async (id) => {
  const token = JSON.parse(localStorage.getItem('token')) || '';
  let url = `http://localhost:3004/alumnos/${id}`;

  const options = {
    method: 'DELETE',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      token: token,
    },
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};
