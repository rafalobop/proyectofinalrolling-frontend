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
