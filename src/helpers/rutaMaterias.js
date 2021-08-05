import axios from 'axios';
import qs from 'qs';

export const getMaterias = async () => {
  let url = `http://localhost:3004/materias`;

  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  };

  const resp = await axios(url, options);
  const { materia } = resp.data;
  // const { data } = resp.data.materia;
  // console.log(materia);
  return materia;
};

export const getMateriaId = async (id) => {
  let url = `http://localhost:3004/materias/${id}`;
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

//Crear nuevo materia
export const AddMateria = async (datos) => {
  // console.log(datos);
  // const token = JSON.parse(localStorage.getItem('token')) || '';
  let url = 'http://localhost:3004/materias';

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

//Actualizar materia
export const modifMateria = async (datos, id) => {
  // console.log(datos);
  // const token = JSON.parse(localStorage.getItem('token')) || '';
  let url = `http://localhost:3004/materias/${id}`;

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

//Inactivar un materia
export const delMateria = async (id) => {
  // const token = JSON.parse(localStorage.getItem('token')) || '';
  let url = `http://localhost:3004/materias/${id}`;

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
