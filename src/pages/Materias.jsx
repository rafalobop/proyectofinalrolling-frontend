<<<<<<< HEAD
import React from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
const Materias = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <h1>Materias</h1>
      <Footer />
    </>
  );
};

export default Materias;
=======
import React from 'react'
import { getMaterias } from '../helpers/rutaMateria'
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';


const Materias = () => {
    getMaterias()

    return (
        <>
        <NavBar />
        <Sidebar />
            <div>
            <h1> Pagina para consultar Materias</h1>
            </div>
        </>
    )
}


export default Materias;
>>>>>>> origin/caro
