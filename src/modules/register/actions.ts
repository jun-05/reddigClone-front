import { AxiosError } from 'axios';
import { User } from './../../types/User';
import { registerThunk } from './thunks';

export const REGISTER = 'register/REGISTER' as const;
export const REGISTER_SUCCESS = 'register/REGISTER_SUCCESS' as const;
export const REGISTER_ERROR = 'register/REGISTER_FAILURE' as const;

export const register = ()=>({
    type:REGISTER
})

export const registerSuccess = (data:User)=>({
    type:REGISTER_SUCCESS,
    payload:data
})

export const registerError = (error:AxiosError)=>({
    type:REGISTER_ERROR,
    payload:error
})
;
export const getRegisterAction = () => ({request :register,success :registerSuccess,failure :registerError})