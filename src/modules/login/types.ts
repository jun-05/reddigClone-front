import { User } from './../../types/User';
import { login, loginError, loginSuccess } from './actions';

export type LoginAction = |ReturnType<typeof login> |ReturnType<typeof loginSuccess>|ReturnType<typeof loginError>

export type LoginState = {
    loading:boolean;
    error:Error | null;
    data : User | null
}