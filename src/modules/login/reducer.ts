import { LoginAction, LoginState,  } from "./types";
import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS } from './actions';


const initialState:LoginState = {
    loading: false,
    error: null,
    data: null
}

function login(state:LoginState=initialState,action:LoginAction){
    switch (action.type) {
        case LOGIN: return {
            ...state,
            loading:true,
        }
        case LOGIN_SUCCESS: return {
            ...state,
            loading:false,
            data:action.payload,
            error:null
        }
        case LOGIN_ERROR: return {
            ...state,
            loading:false,
            data:null,
            error:action.payload
        }
        default:
            return state;
    }
}

export default login;