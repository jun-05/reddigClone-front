import { RootState } from '..';
import { User } from '../../types/User';
import { ThunkAction } from 'redux-thunk';
import { getLoginAction } from './actions';
import { signInUser } from './../../api/auth/loginAPI';
import { LoginAction } from './types';


export function loginThunk({username,password} :{username:string;password:string}): ThunkAction<void, RootState, null, LoginAction> {
  return async (dispatch) => {
    const { request, success, failure } = getLoginAction();
    dispatch(request());
    try {
      const resp = await signInUser({username,password});
      dispatch(success(resp.data));
    } catch (e:any) {
      dispatch(failure(e));
    }
  };
}