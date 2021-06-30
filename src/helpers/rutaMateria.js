import axios from 'axios';
import qs from 'qs';

//Traer todos los cursos con el limite y desde que registro
export const getMaterias = async (/*desde = 0, limite = 4*/) => {
  const url = `http://localhost:3004/materias`; /*?desde=${desde}&limite=${limite}`*/

  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  };

  const resp = await axios(url, options);
  const respuesta = resp.data.materia;
  return respuesta;
};

//Traer un curso según su id
export const getMateriaId = async (id) => {
  let url = `http://localhost:3004/materias/${id}`;
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

//Crear nuevo curso
export const addMateria = async (datos) => {
  // console.log(datos);
  const token = JSON.parse(localStorage.getItem('token')) || '';
  let url = 'http://localhost:3004/materias';

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
    // console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};

//Actualizar curso
export const modifMateria = async (datos, id) => {
  // console.log(datos);
  const token = JSON.parse(localStorage.getItem('token')) || '';
  let url = `http://localhost:3004/materias/${id}`;

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

//Inactivar un curso
export const delMateria = async (id) => {
  const token = JSON.parse(localStorage.getItem('token')) || '';
  let url = `http://localhost:3004/materias/${id}`;

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
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};
