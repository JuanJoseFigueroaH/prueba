import React, { useReducer } from 'react';

import RepositorioContext from './repositorioContext';
import RepositorioReducer from './repositorioReducer';
import { 
    OBTENER_REPOSITORIOS, 
} from '../../types';
import axios from 'axios';

const PerfilState = props => {
    const initialState = {
        repositorios : [],
        mensaje: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(RepositorioReducer, initialState)

    // Obtener los proyectos
    const obtenerRepositorios = async () => {
        const resultado = await axios.get('https:\\api.github.com/users/JuanJoseFigueroaH/repos');
        dispatch({
            type: OBTENER_REPOSITORIOS,
            payload: resultado.data
        })
    }

    return (
        <RepositorioContext.Provider
            value={{
                repositorios: state.repositorios,
                mensaje: state.mensaje,
                obtenerRepositorios,
            }}
        >
            {props.children}
        </RepositorioContext.Provider>   
    )
}

export default PerfilState;