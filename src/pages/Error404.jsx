import React from 'react';
import '../css/error404.css';
import NavBar from '../components/NavBar';

const Error404 = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>ERROR 404</h1>
            <h6>Lo sentimos, la pagina que busca no existe.</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a href="/home">
              <button type="button" className="btn btn-primary mt-3 gohome">
                Volver al Home
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
