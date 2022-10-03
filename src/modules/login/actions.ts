import { AxiosError } from 'axios';
import { User } from './../../types/User';

export const LOGIN = 'login/LOGIN' as const;
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS' as const;
export const LOGIN_ERROR = 'login/LOGIN_ERROR' as const;

export const login = ()=>({
    type:LOGIN
})

export const loginSuccess = (data:User)=>({
    type:LOGIN_SUCCESS,
    payload:data
})

export const loginError = (error:AxiosError)=>({
    type:LOGIN_ERROR,
    payload:error
})
;
export const getLoginAction = () => ({request :login,success :loginSuccess,failure :loginError})