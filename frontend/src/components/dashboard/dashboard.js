import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import AuthContext from '../../context/autenticacion/authContext';

const Dashboard = () => {

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, [])

    return ( 
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">
                <Barra />
                <main>
                    <h1 className="nav-text cerrar-sesion">
                        Bienvenido A la Prueba - Juan Jose Figueroa
                    </h1>
                    <div>
                        <h2 className="dashboard-text-title cerrar-sesion">Linkendin</h2>
                        <p className="dashboard-text">Es la red social de tipo profesional, en la que los usuarios cuelgan sus currículums online y entablan relaciones comerciales, buscando u ofreciendo trabajo. También se dan cita empresas que publican ofertas laborales.</p>
                        <div className="dashboard-bottom">
                            <button 
                                type="button"
                                className="btn btn-primario"
                                target="_blank"
                                href="https://www.linkedin.com/in/juan-jos%C3%A9-figueroa-hurtatis-01038514a/"
                            >Ingresar</button>
                        </div>
                    </div>
                    <div>
                        <h2 className="dashboard-text-title cerrar-sesion">Github</h2>
                        <p className="dashboard-text">Es un portal creado para alojar el código de las aplicaciones de cualquier desarrollador, y que fue comprada por Microsoft en junio del 2018. La plataforma está creada para que los desarrolladores suban el código de sus aplicaciones y herramientas, y que como usuario no sólo puedas descargarte la aplicación, sino también entrar a su perfil para leer sobre ella o colaborar con su desarrollo.</p>
                        <div className="dashboard-bottom">
                            <button 
                                type="button"
                                className="btn btn-primario"
                                target="_blank"
                                href="https://github.com/JuanJoseFigueroaH"
                            >Ingresar</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Dashboard;