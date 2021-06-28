import React, { useState, useEffect } from 'react';
import { getMaterias } from '../helpers/rutaMateria';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Materias from '../components/Materias';
import ListaMaterias from '../components/ListaMaterias';
import '../css/materiaspage.css';

const MateriasPage = () => {
  const [materias, setMaterias] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getMaterias().then((materia) => {
      setMaterias({
        data: materia,
        loading: false,
      });
    });
  }, []);
  getMaterias();

  return (
    <>
      <NavBar />
      <Sidebar />

      <ListaMaterias materias={materias} />

      <Footer />
    </>
  );
};

export default MateriasPage;
