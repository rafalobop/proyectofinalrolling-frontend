import { useEffect, useState } from "react";
import React from "react";
import { getMaterias } from "../helpers/rutaMateria";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";


const Materias = () => {

    const [materias, setMaterias] = useState({
        data: [],
        loading: true

    });


    useEffect(() => {
        getMaterias().then(materia => {
            setMaterias({
                data: materia,
                loading: false

            });
        });
    }, []);

    return (
        <>
            <NavBar />
            <Sidebar />
            <div>
                <div className="container">


                    <h3 className="my-3">Lista de Materias</h3>
                    <div className="row">


                        {materias.data.map(materia => {
                            return (
                                <div className="col">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Materias</th>
                                                <th scope="col">Detalle</th>
                                                <th scope="col">Año</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">{materia.id}</th>
                                                <td>{materia.nombreMateria}</td>
                                                <td>{materia.detalle}</td>
                                                <td>{materia.anio}</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            )

                        })}




                    </div>

                </div>
            </div>
        </>
    )
}


export default Materias;