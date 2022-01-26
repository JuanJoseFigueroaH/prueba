import React, { useReducer } from 'react';

import PerfilContext from './perfilContext';
import PerfilReducer from './perfilReducer';
import { 
    OBTENER_PERFIL, 
} from '../../types';
import axios from 'axios';

const PerfilState = props => {
    const initialState = {
        perfil_dashboard : null,
        mensaje: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(PerfilReducer, initialState)

    // Obtener los proyectos
    const obtenerPerfil = async () => {
        const resultado = await axios.get('https:\\api.github.com/users/JuanJoseFigueroaH/');
        dispatch({
            type: OBTENER_PERFIL,
            payload: resultado.data
        })
    }

    return (
        <PerfilContext.Provider
            value={{
                perfil_dashboard: state.perfil_dashboard,
                mensaje: state.mensaje,
                obtenerPerfil,
            }}
        >
            {props.children}
        </PerfilContext.Provider>   
    )
}

export default PerfilState;