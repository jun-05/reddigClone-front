import { User } from './../../types/User';
import  Axios  from 'axios';

export const signInUser = async ({username,password} :{username:string;password:string} )=>{
     const resp = await Axios.post("/auth/login", {username,password})
     return resp;
}