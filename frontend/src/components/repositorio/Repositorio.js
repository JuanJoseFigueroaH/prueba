
import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import RepositorioContext from '../../context/repositorio/repositorioContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Repositorio = () => {
    // Extrar proyectos de state inicial
    const repositoriosContext = useContext(RepositorioContext);
    const { repositorios, obtenerRepositorios } = repositoriosContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerRepositorios();
        // eslint-disable-next-line
    });

    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <main>
                    <h1 className="nav-text cerrar-sesion">
                        Repositorios
                    </h1>
                    <ul className="div-perfil">
                        <TransitionGroup>
                            {repositorios.map(repositorio => (
                                <CSSTransition
                                    key={repositorio._id}
                                    timeout={200}
                                    classNames="perfil-text"
                                >
                                    <li>
                                        <ul>
                                            <li><h3 nav-text cerrar-sesion>{repositorio.name}</h3></li>
                                            <li>{repositorio.full_name}</li>
                                            <li>{repositorio.owner.login}</li>
                                        </ul>
                                    </li>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ul>
                </main>
            </div>
        </div>
    );
}
 
export default Repositorio;