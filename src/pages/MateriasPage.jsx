import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMaterias, addMateria, delMateria } from '../helpers/rutaMateria';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import '../css/materiaspage.css';
import swal from 'sweetalert';
import ModalNuevaMateria from '../components/ModalNuevaMateria';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../themes/themes';

const Btnstyled = styled.button`
  background-color: ${(props) => props.theme.btn};
  color: ${(props) => props.theme.fontColor};
`;

const MateriasPage = () => {
  const [theme, setTheme] = useState('light');

  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);
  const [materias, setMaterias] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    consultarMaterias();
  }, []);

  const consultarMaterias = () => {
    getMaterias().then((materia) => {
      setMaterias({
        data: materia,
        loading: false,
      });
    });
  };
  const eliminaMateria = (id) => {
    let validar = window.confirm('está seguro que desea borrar la materia?');

    if (validar) {
      delMateria(id).then((resp) => {
        swal(
          'Materia eliminada',
          'Vuelve a materias para ver los cambios',
          'warning'
        );
      });
    }
  };

  const agregarMateria = () => {
    toggle();
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Layout />
        <div className="home-container">
          <div className="add-button-container">
            <Btnstyled className="add-materia-button" onClick={agregarMateria}>
              Agregar Materia
            </Btnstyled>
          </div>
          <ModalNuevaMateria
            openModal={openModal}
            toggle={toggle}
            materias={materias}
            setMaterias={setMaterias}
          />
          <div className="cards_items_container">
            {materias.data.map((materia) => (
              <Link key={materia._id} to={`/materias/${materia._id}`}>
                <div className="materias_card">
                  <div className="materias_card-header">
                    <img src={materia.imagen} alt={materia.nombreMateria} />
                  </div>
                  <div className="materias_card-text">
                    <p>{materia.nombreMateria}</p>
                  </div>
                  <button
                    className="btn-eliminar-materia"
                    onClick={() => {
                      eliminaMateria(materia._id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MateriasPage;
