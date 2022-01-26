import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado, cerrarSesion  } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return ( 
        <aside>
            <h1>Prueba<span> Juan Figueroa</span></h1>

            <div className="proyectos">
                <Link to={'/dashboard'} className="btn btn-blank nav-text cerrar-sesion">
                    Dashboard
                </Link>
                <Link to={'/perfil'} className="btn btn-blank nav-text cerrar-sesion">
                    Perfil
                </Link>
                <Link to={'/repositorios'} className="btn btn-blank nav-text cerrar-sesion">
                    Repositorios
                </Link>
                <Link onClick={() => cerrarSesion() } className="btn btn-blank nav-text cerrar-sesion">
                    Cerrar Sesión
                </Link>
            </div>
        </aside>
     );
}
 
export default Sidebar;