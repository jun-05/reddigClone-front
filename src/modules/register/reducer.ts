import { RegisterAction, RegisterState } from "./types";
import { REGISTER, REGISTER_SUCCESS, REGISTER_ERROR } from './actions';

const initialState:RegisterState = {
    loading: false,
    error: null,
    data: null
}

function register(state:RegisterState=initialState,action:RegisterAction){
    switch (action.type) {
        case REGISTER: return {
            ...state,
            loading:true,
        }

        case REGISTER_SUCCESS: return {
            ...state,
            loading:false,
            data:action.payload,
            error:null
        }
        case REGISTER_ERROR: return {
            ...state,
            loading:false,
            data:null,
            error:action.payload
        }
        default:
            return state;
    }
}

export default register;