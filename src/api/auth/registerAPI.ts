import { User } from './../../types/User';
import  Axios  from 'axios';

export const signUpUser = async (user:User)=>{
     const resp = await Axios.post("/auth/register", user)
     return resp;
}