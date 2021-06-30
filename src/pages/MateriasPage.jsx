import React, { useState, useEffect } from 'react';
import '../css/materiaspage.css';
import { getMaterias } from '../helpers/rutaMateria';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ListaMaterias from '../components/ListaMaterias';
import ModalMateria from '../components/ModalMateria';

const MateriasPage = () => {
  const [materias, setMaterias] = useState({
    data: [],
    loading: true,
  });

  const [materiaSeleccionada, setMateriaSeleccionada] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);

  useEffect(() => {
    getMaterias().then((materia) => {
      setMaterias({
        data: materia,
        loading: false,
      });
    });
  }, []);

  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="home-container">
        <ListaMaterias materias={materias} />
      </div>
      <Footer />
    </>
  );
};

export default MateriasPage;
