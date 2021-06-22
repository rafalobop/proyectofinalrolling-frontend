import axios from 'axios';
import qs from 'qs';

export const postUserLog = async (datos) => {
  const url = `http://localhost:3004/login`;

  const options = {
    method: 'GET',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(datos),
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;

    return {
      data: data,
      loading: false,
    };
  } catch (error) {
    return {
      data: error.response.data,
      loading: false,
    };
  }
};
