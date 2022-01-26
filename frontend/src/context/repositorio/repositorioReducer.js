import { 
    OBTENER_REPOSITORIOS,
} from '../../types';


export default (state, action) => {
    switch(action.type) {
        case OBTENER_REPOSITORIOS:
            return {
                ...state,
                repositorios: action.payload
            }
    }
}