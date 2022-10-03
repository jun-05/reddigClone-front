
import { register, registerSuccess, registerError } from './actions';
import { User } from './../../types/User';

export type RegisterAction = |ReturnType<typeof register> |ReturnType<typeof registerSuccess>|ReturnType<typeof registerError>

export type RegisterState = {
    loading:boolean;
    error:Error | null;
    data : User | null
}