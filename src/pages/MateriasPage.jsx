import React, { useState, useEffect } from 'react';
import '../css/materiaspage.css';
import { getMateriaId, getMaterias } from '../helpers/rutaMateria';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ListaMaterias from '../components/ListaMaterias';
import ModalMateria from '../components/ModalMateria';
import Materias from '../components/Materias'
import { get } from 'jquery';
import { useParams } from "react-router-dom";
import M from 'minimatch';

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
        data: [materia],
        loading: false,
      });
    });
  }, []);



/*  let { id } = useParams();

useEffect(()=> {
  getMateriaId(id).then((materia) =>{
    setMaterias({
      data:materia,
      loading:false,
    });
  });
}, [id]);*/

  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="home-container">
        <ListaMaterias materias={materias} />
        <Materias materias={materias} />
 
       
      </div>
      <Footer />
    </>
  );
};

export default MateriasPage;
