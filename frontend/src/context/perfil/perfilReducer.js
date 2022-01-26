import { 
    OBTENER_PERFIL,
} from '../../types';


export default (state, action) => {
    switch(action.type) {
        case OBTENER_PERFIL:
            return {
                ...state,
                perfil_dashboard: action.payload
            }
    }
}